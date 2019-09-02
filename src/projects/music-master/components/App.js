import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'; //global constant.. that is the base API address to hit the spotify-api-wrapper

class App extends Component { 
    state = { artist: null, tracks: [] };   //artistQuery is string ... artist is object.. null represents an unfinish realized object

    componentDidMount() {
        this.searchArtist('dion'); //show this without search
    }

    searchArtist = (artistQuery )=> { //taking artistQuery as a paramter from ${artistQuery}`
        //console.log('this.state', this.state);

        fetch(`${API_ADDRESS}/artist/${artistQuery}`)  //(`https://spotify-api-wrapper.appspot.com/artist/${this.state.artistQuery}`)
            .then(response => response.json())
            .then(json => {
                //console.log('json', json);     

                if (json.artists.total > 0) {     // in the json file there is artists
                    const artist = json.artists.items[0];  // the first artist in the result json.artists 
                    //console.log('artist', artist);
                    this.setState({ artist: artist }); // this.setState({artist}); shorter

                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => this.setState({ tracks: json.tracks }))                         /* .then(json => console.log('tracks json', json)) */
                        .catch(error => alert(error.massage));
                }
            })
            .catch(error => alert(error.massage));
    }                                                                       //callback function                              
    //doing the fetching to get the artist info



    render() {
        console.log('this.state', this.state);
        return (
            <div>
                <h2>Music Master</h2>  
                <Search searchArtist={this.searchArtist} />
                <Artist artist={this.state.artist} /> {/* have artist property becuase the artist component accesses the artist through props */}
                <Tracks tracks={this.state.tracks} />
            </div>
        );
    }
}

export default App;