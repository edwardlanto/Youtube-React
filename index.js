import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyDZdwW4W-rPemu-f9k09l8ElpYW9dVYrXY';

/* Create a component. Component produces HTML & then put 
the generated HTML in the DOM */

class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo:null
         }

         this.videoSearch('React JS')
    }//constructor
    

    videoSearch(term){
        YTSearch({key:API_KEY, term:term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)
        return (
            <div>
                <SearchBar onSearchChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

// Second arguement in ReactDOM.render is the target DOM element to place App class

// ReactDOM is a library used when interacting with the DOM while react is used to work with components

// Class components 
    //class components are used when the component needs to be aware of any changes in its environment & has a constructor that uses state

// Functional components
    // functional components are components that take in props and returns static html or jsx

// When setting a state, if the property and value are the same you can use only one word eg. videos:videos = video

// When using props, you only use keyword 'this' on class components , not functional

// Passing a prop into Search Bar Component that takes a term and sets it as videoSearch(term)

//lodash & debounce
//lodash is a library and has a debounce method that takes a function and creates a new function that runs x amount of milliseconds
