import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Company from "./components/Company";
import Home from "./components/Home";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { showCompanyScreen } = this.props;
    return (
      <div className="app">
        <Navbar />
        {!showCompanyScreen && <Home />}
        {showCompanyScreen && <Company />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showCompanyScreen: state.showCompanyScreen,
  };
};

export default connect(mapStateToProps, null)(App);
