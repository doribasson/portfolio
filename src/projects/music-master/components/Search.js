
import React, { Component } from 'react';

class Search extends Component {
  state = { artistQuery: '' }; //by default its empty string

  updateArtistQuery = event => {
      //console.log('event.target.value', event.target.value); //we get what the user has typed
    this.setState({ artistQuery: event.target.value }); // have a field that keeps track of what the user has inputed qitin the component state
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') { //if push enter so its like push search
      this.searchArtist();  
    }
  }

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery); //take searchArtist func from App
  }

  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}  /* the input element can fire a callback that has an event object */
          onKeyPress={this.handleKeyPress} // search when enter button without clicking search and click enter
          placeholder='Search for an Artist'
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    )
  }
}

export default Search;























// import React, { Component } from 'react';

// class Search extends Component {
//     state = { artistQuery: ''};

//     updateArtistQuery = event => {
//         //console.log('event.target.value', event.target.value); //we get what the user has typed
//         this.setState({ artistQuery: event.target.value }); // have a field that keeps track of what the user has inputed qitin the component state
//     }



//     handleKeyPress = event => {
//         if (event.key == 'Enter') {   //if push enter so its like push search
//             this.searchArtist();
//         }
//     }

//     render() {
//         reutrn(
//             <div>
//                 <input
//                     onChange={this.updateArtistQuery}   /* the input element can fire a callback that has an event object */
//                     onKeyPress={this.handleKeyPress} // search when enter button without clicking search and click enter
//                     placeholder='Search for Artist'
//                 />
//                 <button onClick={this.searchArtist}>Search</button>

//             </div>
//         )
//     }
// }

// export default Search;