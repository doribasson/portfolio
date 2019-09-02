import React  from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


const SocialProfile = props => {
    const { link, image } = props.socialProfile;

    return (
        <span>
            <a href={link}><img src={image} alt='social-profile' style={{ width: 40, height: 40, margin: 10 }} /></a>
        </span>
    )
}





const SocialProfiles = () =>(  //with inline and with func and not with class

        <div>
            <h2>Connect with me!</h2>
            <div>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                    })
                }
            </div>
        </div>
    )





// const SocialProfiles = () =>{  //without inline but with func and not class because nnot have state

//     return (
//         <div>
//             <h2>Connect with me!</h2>
//             <div>
//                 {
//                     SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
//                         return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

export default SocialProfiles;


























// import React, { Component} from 'react';
// import SOCIAL_PROFILES from '../data/socialProfiles';


// class SocialProfile extends Component{
//     render() {
//         const {link, image } = this.props.socialProfile;
//         return (
//             <span>
//                 <a href={link}><img src={image} alt='social-profile' style={{width: 40, height: 40, margin: 10}} /></a>
//             </span>
//         )
//     }
// }




// class SocialProfiles extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Connect with me!</h2>
//                 <div>
//                     {
//                         SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
//                             return  <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default  SocialProfiles;