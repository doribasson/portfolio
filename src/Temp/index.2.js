import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';

/////ReactDOM.render(<App />, document.getElementById('root'));



// const history = createBrowserHistory(); //allow us to push the user to different urls or replace their entire of link clicking
// ReactDOM.render(
//     <Router history={history}>
//         <Switch>
//             {/* <Route path='/' component={App}> </Route> ....becuse we dont have children so no need </Route>
//             <Route path='/jokes' component={Jokes}> </Route> */}
//             <Route exact={true} path='/' component={App} /> {/*with this exact http://localhost:1234/jokes show us the jokes with route*/}
//             <Route path='/jokes' component={Jokes} />

//         </Switch>
//     </Router>,
//     document.getElementById('root')
// );




//the same just more cleaner 
 //allow us to push the user to different urls or replace their entire of link clicking
ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            {/* <Route path='/' component={App}> </Route> ....becuse we dont have children so no need </Route>
            <Route path='/jokes' component={Jokes}> </Route> */}
            <Route exact path='/' component={App} /> {/* the exact default is true ..with this exact http://localhost:1234/jokes show us the jokes with route*/}
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>,
    document.getElementById('root')
);







// new Promise(resolve => {})  //this takes a callback function whose first parameter is the reslove keyword and the reslove keyword is function itself by calling the result function



// new Promise(resolve => { //response string
//     setTimeout(() => {          //is it asynchrony
//         console.log('Bears');
//         resolve();  //the promise has completed by calling the resolve keyword callback and now the promise is only going to complete after the log of bears has finished
//     }, 2000);
// })
//     .then(() => {  // wait untill the resolve finsh and then do the other..
//         console.log('Beets');
//         console.log('Battlestar');
//     })


    // new Promise((resolve, reject) => {   // with reject allows us to handl cases when the asynchronous functionality unssuccessful
    //     return reject(new Error('No bears'));
    //     setTimeout(() => {          //is it asynchrony
    //         resolve('Bears, Beets, Battlestar');  //the promise has completed by calling the resolve keyword callback and now the promise is only going to complete after the log of bears has finished
    //     }, 2000);
    // })
    //     .then((quote) => {  // wait untill the resolve finsh and then do the other..
    //         console.log(quote);
    //     })
    //     .catch(error => console.log('error', error));




        // new Promise(resolve => {   //response object 
        //     setTimeout(() => {          //is it asynchrony
        //         resolve('Bears, Beets, Battlestar');  //the promise has completed by calling the resolve keyword callback and now the promise is only going to complete after the log of bears has finished
        //     }, 2000);
        // })
        //     .then((quote) => {  // wait untill the resolve finsh and then do the other..
        //         console.log(quote);
        //     });





// setTimeout(() =>{    show Beets and Battlestar first becuase Bears wait 2 sec and setTimeout asynchrony and not stopping the other to continue
//     console.log('Bears');
// }, 2000);

// console.log('Beets');
// console.log('Battlestar');



