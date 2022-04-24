import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Nevjegy extends Component {
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
      <div style={{textAlign:"center"}}>
          <h1 className="intro" style={{fontStyle:"italic"}}>Ed & Levi Sudoku</h1>
            <div>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <h2 className="intro">Elérhetőségeink:</h2>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <hr style={{borderTop:"2px solid #1a1c2c"}}/>
            <p className="szoveg">Weboldalt Készítette: Pál Edvárd</p>
            <p className="szoveg">Telefonszám: 06303546754</p>
            <p className="szoveg">Email: edvard.kropkisudoku@gmail.com</p>
            
            <hr style={{borderTop:"2px solid white"}}/>
            <p className="szoveg">Sudoku Játékot Készítette: Kathy Levente</p>
            <p className="szoveg">Telefonszám: 06304576453</p>
            <p className="szoveg">Email: levente.kropkisudoku@gmail.com</p>
            </div>
            
      </div>
    );
  }
}
