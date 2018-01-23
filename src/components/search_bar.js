import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: 'React JS' }
    }
    render(){
        return (
        <div className="search-bar">
            <h1 className="main-title">Get Your Searches Loaded Quick</h1>
            <input
                className="input-field"
                value={this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)}/>
        </div>
        );  
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchChange(term);
    }


}

export default SearchBar;

// State Definition
//State is a plain javascript object is a way to record and react to user events.
// Each class has its own state object, whenever a state changes, the component rerenders and forces all its children to be rendered
// To set an initial state to a class you would need to set up a constructor function and pass in an argument eg. props and after call the super method

//On Change Event
    // basically says when input changes pass in the event.target.value or term to the onInputChange method

//SetState
    //Whenever setState is called the component, along with all its children are re-rendered