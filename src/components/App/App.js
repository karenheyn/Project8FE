import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import Restaurant from "../Restaurant/Restaurant";
import "./App.css";
let url = "https://dc-100-restaurants-db.herokuapp.com/restaurants";

// jfhsdbvaeljhvbear;kjvb;keajrnvk;eajrnv;kaejnvk;ajnvk;nadvk



// javlhbvlabefnvkjeawnkljabnvelkjabnvkljr

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rName: [],
      sideDrawerOpen: false,
      isLoading: true
    };
  }
  componentDidMount() {
    //this is tylers comment
    fetch(url)
      .then(res => res.json())

      .then(res => {
        // console.log(res);
        this.setState({ data: res, isLoading: false });
      })
      .catch(err => {
        console.error(err);
      });
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    // console.log(this.state.data);
    for (let i = 0; i < this.state.data.length; i++) {
      this.state.rName.push(this.state.data[i].name);
    }
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    if (!this.state.loading) {
      return (
        <div className="main-container">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main>
            <Route path="/" render={() => <Home data={this.state.data} />} />
            <Route path="/searchresults" component={SearchResults} />
            <Route path="/:restaurant" component={Restaurant} />
          </main>
        </div>
      );
    }
    return <div>Loading</div>;
  }
}

export default App;
