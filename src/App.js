import React from 'react';
import './App.css';
import Movies from './Components/Movies';
import SearchBar from './Components/SearchBar'
import gif from '../src/eternity.gif'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      data: [],
      loading: false
    }
  }

  searchMovie = async (text)=>{
    const res = await (await fetch(`http://omdbapi.com/?apikey=bd992033&s=${text}`)).json()
    this.setState({
      data: res.Search,
      loading: false
    })
    

  }
  clearData = () =>{
    this.setState({
      data: []
    })
  }
  setLoadingTrue = () =>{
    this.setState({
      loading: true
    })
  }
  
  render(){
    const gifPosition = {
        position: "absolute",
        margin: "0",
        textAlign: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
    return (
      <div className="container">
        <SearchBar searchMovie={this.searchMovie} loading={this.setLoadingTrue}/>
        
       {!(this.state.data.length === 0) && <button className="btn btn-sm btn-danger" onClick={this.clearData} style={{width: "200px", marginTop: "20px"}}>Clear</button>}
        
        {!(this.state.loading) ? <Movies movies={this.state.data}/> : <img style={gifPosition} src={gif} alt={gif}/>}
        
      </div>
    );
  }
  
}

export default App;
