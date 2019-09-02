import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }


    //  onChange = (e) => {
    //     this.setState({ title: e.target.value});
    //  }


    // onChange = (e) =>
    //     this.setState({ title: e.target.value }); // if just have title ..but if i have name and other proprety will do **



    onChange = (e) =>  //** 
        this.setState({ [e.target.name]: e.target.value }); //and we do name="title" ... name="firtstName" ..he take the name field


    onSubmit = (e) => {
        e.preventDefault(); //we want to stop try submit the actual file 
        this.props.addTodo(this.state.title); //we want to pass the title up becuse we are changeing where or we are adding title
        this.setState({ title: '' }); //after submit we want to clear the feild
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    // className="btn"
                    style={{ flex: '1' }}

                />

            </form>


        )
    }
}


//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default AddTodo;