//import React, { Component } from 'react'; //and now no need the Component 
import React  from 'react';
import PROJECTS from '../data/projects';

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
        <h2>Highlighted Projects</h2>
        <div>
            {/* <div>{PROJECTS[0].title}</div>
                <div>{PROJECTS[1].title}</div>
                <div>{PROJECTS[2].title}</div> */}
            {
                PROJECTS.map(PROJECTS => (
                    //<div key={PROJECTS.id}>{PROJECTS.title}</div>
                    <Project key={PROJECTS.id} project={PROJECTS} />
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