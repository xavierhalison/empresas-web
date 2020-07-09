import React from "react";
import { connect } from "react-redux";

import "./App.css";

import Navbar from "./components/Navbar";
import Company from "./components/Company";
import Home from "./components/Home";
import Auth from "./components/Auth";

class App extends React.Component {
  render() {
    const { isLogged, showCompanyScreen } = this.props;
    return (
      <div className="app">
        {!isLogged && <Auth />}
        {isLogged && (
          <React.Fragment>
            <Navbar />
            {!showCompanyScreen && <Home />}
            {showCompanyScreen && <Company />}
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, company } = state;
  return {
    isLogged: auth.isLogged,
    showCompanyScreen: company.showCompanyScreen,
  };
};

export default connect(mapStateToProps, null)(App);
