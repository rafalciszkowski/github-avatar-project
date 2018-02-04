import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList.js';
import Form from './Form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.addNewCard = this.addNewCard.bind(this);
    this.removeCard = this.removeCard.bind(this);

    this.state = {
      cards: []
    }
  }

  addNewCard(response) {
    let card = {name: response.name, company: response.company, avatarUrl: response.avatar_url};

    this.setState(prevState => ({
      cards: prevState.cards.concat(card)
    }));
  }

  removeCard(cardIndex) {
    var arr = this.state.cards;
    arr.splice(cardIndex, 1);

    this.setState({
      cards: arr
    });
  }

  render() {
    return (
      <div className="App">
        <Form addNewCard={this.addNewCard}/>
        <CardList cards={this.state.cards} removeCard={this.removeCard}/>
        <br />
      </div>
    );
  }
}

export default App;
