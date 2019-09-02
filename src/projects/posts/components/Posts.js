import React, { Component } from 'react';
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

/* add post -- we just added the action we send the type and the payload to the reducer 
and then the reducer we decided reflected how we wanted our state to come down and we just wanted that single item
to get added to our state and then it in in other component inside the post component
 */


class Posts extends Component {

    componentWillMount() {   //call to fetchPosts(); action
        this.props.fetchPosts();
    }
    
    componentWillReceiveProps(nextProps) {   //use another lifecycle method. when it recive new property from the state this will run and it take in...is do new post to the list  
        if(nextProps.newPost) { //if it there the new post
            this.props.posts.unshift(nextProps.newPost);//posts - all the post items.. unshift- add post from the begining ..push- from the end            
        }
    
    }
    
    render() {
        
        // const postitems = this.state.posts.map(post => (
            const postItems = this.props.posts.map((post,index) => ( //becuase we mapStateToProps
            <div key={post.id}>
                <h3>{index+1}{'.'}&nbsp;{post.title}</h3>
                <p>{post.body}</p>
                {/* <hr /> */}
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>

        );
    }

}

Posts.propTypes = {
   fetchPosts: PropTypes.func.isRequired,
   posts: PropTypes.array.isRequired,
   newPost: PropTypes.object
};

const mapStateToProps = state => ({ //this ({}) is pass in an object
    posts: state.posts.items, // name posts becuase in our reducer our route reducer that is what we  set in reducers/index.ks
    newPost: state.posts.item
}); 

export default connect(mapStateToProps, { fetchPosts })(Posts); //fetchPosts call to fetch request

