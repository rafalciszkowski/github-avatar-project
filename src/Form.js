import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "gaearon"
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var that = this;
        axios.get('https://api.github.com/users/' + this.state.userName)
            .then(function(response){
                that.props.addNewCard(response.data);
                that.setState({userName: ''});
            });
    };

    handleChange = (event) => {
        this.setState({userName: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} placeholder="gitHub user name" onChange={this.handleChange} required/>
                <button type="submit">Send</button>
            </form>
        )
    }
}

export default Form;