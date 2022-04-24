import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
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
            <p className="intro">Üdvözöllek az Ed & Levi Sudoku weboldalán.</p>
            <hr style={{borderTop:"2px solid white"}}/>
            <p className="szoveg">Az Ed & Levi Sudoku egy magyarok által fejlesztett Kropki Sudoku játék és weboldal. </p>
            <p className="szoveg">A weboldalon megtekinthetik a játékosok a játékban elért eredményüket a ranglisták oldalainak megtekintésével.</p>
            <hr style={{borderTop:"2px solid white"}}/>
          </div>

          <h3 className="intro">A Kropki Sudoku szabályai</h3>

          <div>
          <hr style={{borderTop:"2px solid white"}}/>
            <p className="szoveg">A Kropki Sudokuban a megszokott Sudokuhoz hasonlóan minden sorban és oszlopban minden szám csak egyszer szerepelhet, így kell elérni, hogy minden mezőben szerepeljen egy szám. </p>
            <p className="szoveg">Ami miatt eltér a Kropki Sudoku a megszokottól, az az, hogy a Sudokuban nem szerepel előre megadott szám, teljesen üres a Sudoku. </p>
            <p className="szoveg">A számokat a Sudoku négyzeteinek rácsain szereplő fehér és fekete vonalak alapján kell kitalálni. </p>
            <p className="szoveg">A fekete vonal melletti számok közül az egyik kétszer annyi, mint a másik, míg a fehér vonal két oldalán olyan két szám kell legyen, amelyek a különbsége 1.</p>
            <hr style={{borderTop:"2px solid white"}}/>
          </div>

          <h3 className="intro">Eredmény ranglistába helyezése</h3>

          <div>
          <hr style={{borderTop:"2px solid white"}}/>
          <p className="szoveg">A sikeres megoldás után az "Eredmény feltöltése" gombra kattintva a felhasználóneved megadásával töltheted fel a ranglistákra azt, hogy mennyi idő alatt sikerült megoldanod a Sudokut. </p>
          <p className="szoveg">Ezek után a ranglisták oldalán meg tudod tekinteni a saját eredményed. </p>
          <hr style={{borderTop:"2px solid white"}}/>
          </div>

          
      </div>
    );
  }
}
