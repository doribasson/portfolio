import React, { Component } from 'react';
import SocialProfiles from './SocialProfiles';

// const Student =({ student: {} }) =>(  
//     //  <p style={{ margin: 20}}>{setup} <em>{punchline}</em></p>
//     <p><h1>Student</h1> </p>
//  )



const Students =() =>{

    return (
        <div>
            <h2>Higelighted Student</h2>
            <hr/>
            <SocialProfiles />           
        </div>
    )

}

// class Students extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Higelighted Student</h2>
//                 <hr/>
//                 <SocialProfiles />           
//             </div>
//         )
//     }
// }


export default Students;