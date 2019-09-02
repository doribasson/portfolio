import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete,handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center"> todo list</h3>
                {
                    items.map(item => {
                        return (<TodoItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            //2 options for move the props to TodoItem
                            handleDelete={() => handleDelete(item.id)} //handleDelete from here to app becuse we get the id from here 
                            // handleDelete={handleDelete} //handleDelete from here to TodoItem and take from there the id and back to app with this function and id

                            handleEdit={() => handleEdit(item.id)} 

                        />
                        )
                    })
                }


                <button
                    type="button"
                    className="btn btn-danger btn-bloack text-capitalize mt-5"
                    onClick={clearList}
                >
                    clear list
                </button>

            </ul>
        );
    }

}

export default TodoList;