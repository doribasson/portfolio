import React, { Component } from 'react';

class Tracks extends Component {
    state = { playing: false, audio: null, playingPreviewUrl: null }; //play and pause the audio depending on this plating bully. if false currently play the audio

    //previewUrl is helper function
    playAudio = previewUrl => () => { //the second  () => is own callback function call play audio with the parentheses returing as a reference
        const audio = new Audio(previewUrl);

        if (!this.state.playing) {  //check whether or not this playing currently false
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
        } else {
            this.state.audio.pause();

            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({ playing: false }); //pause the audio
            } else {
                audio.play();
                this.setState({ playing: true, audio, playingPreviewUrl: previewUrl }); // set the state current playing.. update - make to start the new song and stop the rest
            }
        }
    }

    trackIcon = track => {
        if (!track.preview_url) {
            return <span>N/A</span>
        }

        if (
            this.state.playing && 
            this.state.playingPreviewUrl === track.preview_url
        ) {
            return <span>| |</span> //pause music
        }

        return <span>&#9654;</span> //button music

    }

    render() {
        const { tracks } = this.props;

        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track; //from api TrackerJson

                        return (
                            <div
                                key={id}
                                onClick={this.playAudio(preview_url)}
                                className='track'>
                                <img
                                    src={album.images[0].url}
                                    alt='track-image'
                                    className='track-image'
                                />
                                <p className='track-text'>{name}</p>
                                <p className='track-icon'>{this.trackIcon(track)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;

















// import React, { Component } from 'react';

// class Tracks extends Component {
//     state = { playing: false, audio: null, playingPrevUrl: null };  //play and pause the audio depending on this plating bully. if false currently play the audio

//     //previewUrl is helper function
//     playAudio = previewUrl => () => { //the second  () => is own callback function call play audio with the parentheses returing as a reference
//         const audio = new Audio(previewUrl);

//         if (!this.state.playing) { //check whether or not this playing currently false
//             audio.play();
//             this.setState({ playing: true, audio, playingPrevUrl: previewUrl });
//         } else {
//             this.state.audio.pause();

//             if (this.state.playingPrevUrl === previewUrl) {
//                 this.setState({ playing: false }); //pause the audio

//         } else {
//             audio.play(); //the new audio object play audio
//             this.setState({ playing: true, audio, playingPrevUrl: prevurl}) // set the state current playing.. update - make to start the new song and stop the rest
//         }

//     }
// }


// render() {
//     const { tracks } = this.props;

//     return (
//         <div>
//             {
//                 tracks.map(track => {
//                     const { id, name, album, preview_url } = track; //from api TrackerJson

//                     return (
//                         <div key={id} on onClick={this.playAudio(preview_url)}>
//                             <img src={album.images[0].url} alt='track-image' />
//                             <p>{name}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// }

// export default Tracks;