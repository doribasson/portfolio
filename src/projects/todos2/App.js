import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {

  state = {
    items: [],
    id: uuid(),
    title: '',
    editItem: false
  }

  clearList = () => {
    this.setState({
      items: []
    });
  }


  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleDelete = id => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterItems
    })

  }

  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id !== id)

    const selectItem = this.state.items.find(item => item.id === id)

    this.setState({
      items: filterItems,
      title: selectItem.title,
      editItem: true,
      id: id
    })

  }



  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.title
    };


    console.log(newItem);

    /*  within react we cannot mutate the state so the state is immuttable
     so we wouldnot be able to something along the lines of push
     because push takes the old array and just as the value to it,
     we want to keep the track of the old state as well  as the new state
     so how ? we could use the spread operator ...//updatedItems
 */
    if (this.state.title !== '') {
      const updatedItems = [newItem, ...this.state.items]; //1param this is gonna grab everything that is within this array , add newItem 

      this.setState({
        items: updatedItems,
        title: '',
        id: uuid(),
        editItem: false
      })
    }
    else
      alert("Must give a title");

  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center"> todo input</h3>
            <TodoInput
              title={this.state.title}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;