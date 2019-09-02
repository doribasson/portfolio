//import React, { Component } from 'react'; //and now no need the Component because we work with stateless func and not class
import React  from 'react';
import PROJECTS from '../data/projects';
import Header from './Header'; 

// class Project extends Component {    //we can and prefer Project function and not extend from Component when we not use state
//render() {
const Project = props => {   //this is function with capitalize the name P because we create react component 
    const { title, image, description, link } = props.project;

    return (
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt='protfile' style={{ width: 200, height: 120 }} />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}



const Projects = () => (  //inline return 
    <div>
        {/* <Header /> */}
        <h2>Highlighted Projects</h2>
        <div>
            {/* <div>{PROJECTS[0].title}</div>
                <div>{PROJECTS[1].title}</div>
                <div>{PROJECTS[2].title}</div> */}
            {
                PROJECTS.map(PROJECT => (
                    //<div key={PROJECTS.id}>{PROJECTS.title}</div>
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)

// const Projects = () => {
//         return (
//             <div>
//                 <h2>Highlighted Projects</h2>
//                 <div>
//                     {/* <div>{PROJECTS[0].title}</div>
//                     <div>{PROJECTS[1].title}</div>
//                     <div>{PROJECTS[2].title}</div> */}
//                     {
//                         PROJECTS.map(PROJECTS => {
//                             return (
//                                 //<div key={PROJECTS.id}>{PROJECTS.title}</div>
//                                 <Project key={PROJECTS.id} project={PROJECTS} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>

//         )
// }

export default Projects;


















// import React, { Component } from 'react';
// import PROJECTS from '../data/projects';


// class Projects extends Component {
//     state = { disp: {} };
//     render() {
//         <Disp disp={this.state.disp} />
//         //console.log('this.props', this.props);
//         return ( 
//             <div>
//                 <h2>Highlighted Projects</h2>
//                 <div>
//                     {/* <div>{PROJECTS[0].title}</div>
//                     <div>{PROJECTS[1].title}</div>
//                     <div>{PROJECTS[2].title}</div> */}
//                     {
//                         PROJECTS.map(PROJECTS =>{
//                             return (
//                                 //<div key={PROJECTS.id}>{PROJECTS.title}</div>
//                                 <Project key={PROJECTS.id} project={PROJECTS} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>

//         )
//     }
// }