import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { title, handleDelete, id, handleEdit } = this.props;
        
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h5 style={{color:'#3d003d'}}>{title}</h5>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen" />
                    </span>
                    {/* we have 3 options to pass it from TodoList to here..the first withoute the id becuase we take the id from TodoList the seconed and three from here we take the id*/}
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                    {/* <span className="mx-2 text-danger" onClick={handleDelete.bind(this,id)}> */}
                    {/* <span className="mx-2 text-danger" onClick={() => handleDelete(id)}> */}

                        {/* //<button onClick={() => this.handleClick(id)} /> */}
                        {/* <button onClick={this.handleClick.bind(this, id)} /> */}

                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;