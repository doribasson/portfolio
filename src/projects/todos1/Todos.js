import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        //console.log(this.props.todos) //get the todos as props from app Todos todos={this.state.todos} mean that we get all the array to here
        return this.props.todos.map(todo => (
            // <h3>{todo.title}</h3>
            <TodoItem key={todo.id} todo={todo}
                markComplete={this.props.markComplete} //בא בחזרה  לפה מהטודואייטמס
                delTodo={this.props.delTodo} /> //בא בחזרה  לפה מהטודואייטמס
        ))//.reverse();

    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,  
}

export default Todos;