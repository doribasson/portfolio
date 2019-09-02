import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            //  backgroundColor: '#001f3d',
            // backgroundColor: '#f4f4f4',
            padding: '10px', // do the size of the color
            borderBottom: '1px #ccc dotted' //do the line frame sperate
        }
    }

    markComplete = (e) => {
        console.log(this.props);

    }

    render() {
        const {title , id } = this.props.todo //this is d`structure for shorter  ***
        return (
            // <div style={{backgroundColor: '#f4f4f4'}}> we can do it but we do with var
            // <div style={itemStyle}> this two we can do but prefer with methood getStyle
            <div style={this.getStyle()}>
                <p>
                    {/* bind for takking the id from app.js */}
                    {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {' '} */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {/* {this.props.todo.title} no need to do it because we shorted in *** */ } 
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px', //the size of the red buuton Length and width  
    borderRadius: '50%', //make it circle
    cursor: 'pointer', //will see hands pinter when we click
    float: 'right' //where will be the button
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem;
