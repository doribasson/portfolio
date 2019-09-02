import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts = () => dispatch => {  //like two function first func FETCH_POST wait that the seconed func will back
    //like promise whenever we want to send the data we call dispatch  
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => res.json())
        .then(posts =>
            dispatch({   //this dispatch to reducer and the reducer take it with case
                type: FETCH_POSTS,
                payload: posts

            })
        );
};


//like top
// export function FETCH_POST() {
//     return function (dispatch) { //like promise whenever we want to send the data we call dispatch  
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts =>dispatch({ 
//             type: FETCH_POST,
//             payload: posts

//          }));

//     }
// }




//createing action
export const createPost = postData => dispatch => {  //like two function first func FETCH_POST wait that the seconed func will back
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post =>
            dispatch({
                type: NEW_POST,
                payload: post
            })
        );

};

