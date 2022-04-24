import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Download extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h2 style={{color:"#333c57"}}>A játékot itt tudod letölteni:</h2>
          <a href="https://drive.google.com/file/d/15ZXYo1sIPvB3TmE5wZVEO7SPlYDeeKny/view?usp=sharing" target="_blank" style={{textDecoration:"none",color:"#ef7d57"}}><h3 style={{fontWeight:"bold",fontStyle:"italic"}}>Letöltés</h3></a>
          <p style={{textDecoration:"none",color:"#333c57"}}>A linkre kattintva megnyílik egy új oldal, ahol a jobb felső sarokban lévő letöltés gombbal elkezdheted a játék letöltését a böngélsződ használatával.</p>
          <p style={{textDecoration:"none",color:"#333c57"}}>A letöltés végén ki kell csomagold a játék mappáját, amiben majd megtalálod a Sudoku játékot.</p>
        </header>
      </div>
    );
  }
}
