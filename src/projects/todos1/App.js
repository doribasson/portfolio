import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Header from './Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
// import uuid from 'uuid'; not use right now because we take from api
import axios from 'axios';


class App extends Component {

  state = {
    todos: []                                   // todos: [
    //   {
    //     // id: 1,
    //     id: uuid.v4(),
    //     title: 'Take out of 1',
    //     completed: false
    //   },
    //   {
    //     // id: 2,
    //     id: uuid.v4(),
    //     title: 'Take out of 2',
    //     completed: true
    //   },
    //   {
    //     // id: 3, 
    //     id: uuid.v4(),
    //     title: 'Take out of 3',
    //     completed: false
    //   }
    // ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10') //give use promise.. we can limit the number inside the json to 10 with this -  ?_limit=10'
      // .then(res => console.log(res.data))
      .then(res => this.setState({ todos: res.data })) // to put these in my state

  }

  //Toggle Complete
  markComplete = (id) => {  //the id come from bind  in TodoItems.js  like markComplete מגיע בזכות הבינד שיש אותו הכי למטה בטודואייטמס ואז עולה לטודוס ואז לקומפוננקטה פה
    // console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })


    });

  }


  // //Delete Todo from our data and not from api
  // delTodo = (id) => {  //האידי בא מלמטה מהטוטלאייטמס ומצליח לעלות בזכות הבינד שיש שם
  //   // console.log(id)
  //   this.setState({
  //     todos: [...this.state.todos.filter(todo =>
  //       todo.id !== id)]
  //   })
  // }


  delTodo = (id) => {  //האידי בא מלמטה מהטוטלאייטמס ומצליח לעלות בזכות הבינד שיש שם
    // console.log(id)
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))
  }


  // function remove(id) {
  //   return fetch(`/books/${id}`, {method: 'DELETE'})
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log('Deleted:', res.message)
  //       return res
  //     })
  //     .catch(err => console.error(err))
  // }
  




  //  deleteData = (item,url) => {
  //   return fetch(url + '/' + item, {
  //     method: 'delete'
  //   })
  //   .then(response => response.json());
  // }
  


//   function deleteData(item, url) {
//   return fetch(url + '/' + item, {
//     method: 'delete'
//   })
//     .then(response => response.json());
// }



//////Add Todo
// addTodo = (title) => { //this is from our data and not from api
//   //console.log(title)
//   const newTodo = {
//     // id: 4,
//     id: uuid.v4(),
//     title: title, // in es6 we can do just title witout title: title
//     completed: false
//   }
//   this.setState({ todos: [...this.state.todos, newTodo] })
// }


//////Add Todo from api for posting
addTodo = (title) => { //this is from our data and not from api
  //console.log(title)
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: title,
    completed: false
  })
    .then(res => this.setState({ todos: [ res.data,...this.state.todos] })); //if axios.post not work so he will no come here like promise

}



render() {
  // console.log('this.state.todos', this.state.todos);
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} /> {/* come from AddTodo.js from line this.props.addTodo(this.state.title); */}
              <Todos todos={this.state.todos}  //take {this.state.todos} as prop to the Todos compenent for do something with the state
                markComplete={this.markComplete} //מפעיל אותו מלמטה בטודואייטמס ואז עולה לטודוס ואז לפה וכאן מוצא את הפונקציה ונכנס אליה
                delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}
}

export default App;

