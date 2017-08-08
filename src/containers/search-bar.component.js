import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './../actions/index'

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event){
        this.setState({term: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }
    render(){
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit} className="input-group">
                    <input className="form-control" onChange={this.handleInputChange} value={this.state.term} type="text" placeholder="Search weather-forcast"/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);