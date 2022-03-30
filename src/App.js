import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardAdmin from "./components/board-admin.component";
import Ranglista4 from "./sajatosztalyok/Ranglista4"; 
import Ranglista5 from "./sajatosztalyok/Ranglista5"; 
import Ranglista6 from "./sajatosztalyok/Ranglista6"; 
import Ranglista7 from "./sajatosztalyok/Ranglista7"; 
import Ranglista8 from "./sajatosztalyok/Ranglista8"; 
import Ranglista9 from "./sajatosztalyok/Ranglista9"; 
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Admin_torles from "./sajatosztalyok/Admin_torles";
import Admin_torles_ido from "./sajatosztalyok/Admin_torles_ido";
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div style={{backgroundColor:"#1a1c2c",height:"auto",minHeight:"100vh"}}>
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#333c57"}}>
      <Navbar.Brand style={{color:"white"}} href="/Fooldal">
        Ed & Levi - Sudoku
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{color:"white"}} href="/Letolto">Letöltő oldal</Nav.Link>
          <NavDropdown title="Ranglisták" id="collasible-nav-dropdown">
            <NavDropdown.Item style={{backgroundColor:"#566c86",color:"white"}} href="/Ranglista4">Ranglista 4x4</NavDropdown.Item>
            <NavDropdown.Item style={{backgroundColor:"#566c86",color:"white"}} href="/Ranglista5">Ranglista 5x5</NavDropdown.Item>
            <NavDropdown.Item style={{backgroundColor:"#566c86",color:"white"}} href="/Ranglista6">Ranglista 6x6</NavDropdown.Item>
            <NavDropdown.Item style={{backgroundColor:"#566c86",color:"white"}} href="/Ranglista7">Ranglista 7x7</NavDropdown.Item>
            <NavDropdown.Item style={{backgroundColor:"#566c86",color:"white"}} href="/Ranglista8">Ranglista 8x8</NavDropdown.Item>
            <NavDropdown.Item style={{backgroundColor:"#566c86",color:"white"}} href="/Ranglista9">Ranglista 9x9</NavDropdown.Item>
          </NavDropdown>
          {showAdminBoard && <NavDropdown title="Admin funkciók" id="collasible-nav-dropdown">
        <NavDropdown.Item style={{backgroundColor:"#566c86",color:"white"}} href="/Admin_torles">Egyenkénti törlés</NavDropdown.Item>
        <NavDropdown.Item style={{backgroundColor:"#566c86",color:"white"}} href="/Admin_torles_ido">Idő szerinti törlés</NavDropdown.Item>
        </NavDropdown>}
        </Nav>

        {currentUser ? (
        <Nav>
          <Nav.Link style={{color:"white"}} href="/profile">
             {currentUser.username}
            </Nav.Link>
          <Nav.Link style={{color:"white"}} eventKey={2} href="/login" onClick={this.logOut}>Logout</Nav.Link>
        </Nav>
        ) : (
        <Nav>
          <Nav.Link style={{color:"white"}} href="/login">Login</Nav.Link>
          <Nav.Link style={{color:"white"}} eventKey={2} href="/Nevjegy">Névjegy</Nav.Link>
        </Nav>
        )}

      </Navbar.Collapse>
    </Navbar>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/Fooldal"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/Ranglista4" component={Ranglista4} />
            <Route path="/Ranglista5" component={Ranglista5} />
            <Route path="/Ranglista6" component={Ranglista6} />
            <Route path="/Ranglista7" component={Ranglista7} />
            <Route path="/Ranglista8" component={Ranglista8} />
            <Route path="/Ranglista9" component={Ranglista9} />
            <Route path="/Admin_torles" component={Admin_torles} />
            <Route path="/Admin_torles_ido" component={Admin_torles_ido} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
