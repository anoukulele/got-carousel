import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card'
import Title from './Components/Title'
    
class App extends Component {
    constructor () {
        super();
        this.state = {
            episodes: [], starting_index: 0}  }
    state = {name: '', number: 0, summary: 0, image: 'img.original'}

async componentDidMount () {
    const link = await fetch ('http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes'); 
    const episode = await link.json();
    console.log(episode._embedded.episodes);
    this.setState ({episodes: episode._embedded.episodes});
}

  render() { 
      let content = null; 
      if (this.state.episodes.length === 0) {
          return null;
  }
    return (
        <div>
        <Title>
        ~ Game of Thrones ~
        </Title>
        
        <Card   nextClick={()=>{
        const startIndex = this.state.starting_index
        let nextIndex = startIndex + 3
        if (nextIndex > this.state.episodes.length - 2){
          nextIndex = this.state.episodes.length - 2 }
        this.setState({starting_index : nextIndex})
        }}

        backClick={()=>{
        const startIndex = this.state.starting_index
        let nextIndex = startIndex - 3
        if (nextIndex < 0 ){
          nextIndex = 0 }
        this.setState({starting_index : nextIndex})
        }}
        
   episode = {[this.state.episodes[this.state.starting_index],
this.state.episodes[this.state.starting_index+1],this.state.episodes[this.state.starting_index+2]]}>
       
        </Card>
      </div>
    );
  }
}
export default App;