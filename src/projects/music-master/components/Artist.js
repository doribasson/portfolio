import React from 'react';

//artist stored in the state of the overall app.js component

// const Artist = props => {     //no extend becuase this state is stateless ..props- input that way the parent component can pass data down to his artist component
//     props.artist    //this artist here component is going to be the one to display that artists data therefore using component through props
// }


//the same like the above
////this artist here component is going to be the one to display that artists data therefore using component through props
//no extend becuase this state is stateless ..props- input that way the parent component can pass data down to his artist component...
const Artist = ({ artist }) => {
    if (!artist) return null; //check if the artist is not defined.. if returning null react knows not to rending anything and can skip the rest

    const { images, name, followers, genres } = artist;

    return (
        <div>
           <h3>{name}</h3>
           <p>{followers.total} followers</p>
           {/* 1 overall string using the array join command rather join function.. the comma will be our value to join all items within the genres array */}
           <p>{genres.join(',')}</p> 
           {/* the first images[0] for checking that image is zero is actually defined. if not defined so he will not go to images[0].url */}
            <img src={images[0] && images[0].url} 
            alt='artist-profile' 
            style={{
                width: 200,
                height: 200,
                borderRadius: 100,   //square a perfect circle
                objectFit: 'cover' // make the value for this cover and this ensure that
            }}
            />
        </div>
    )
}

export default Artist;