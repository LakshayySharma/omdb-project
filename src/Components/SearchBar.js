import React, { Component } from 'react'


export class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            loading: false
        }
    }
    onSubmit =(e)=>{
        e.preventDefault()
        this.setState({
            text: '',
        })
        this.props.searchMovie(this.state.text)
        this.props.loading()
        
        
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChange} name="text" value={this.state.text} placeholder="search a movie"/>
                <input type="submit" value="search" className="btn-primary" style={{width: "100px", marginLeft: "10px"}} />
                </form>
            </div>
        )
    }
}

export default SearchBar