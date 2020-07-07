import React from "react";
import logo from "../../assets/logo-nav.png";
import searchIcon from "../../assets/ic-search-copy.png";
import "./style.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="navbar">
          <img className="navbar__logo" src={logo} alt="Logo da ioasys" />
          <img
            className="navbar__search-icon"
            src={searchIcon}
            alt="pesquisar"
          />
        </div>
        <div className="content">
          <span className="content__empty-state">
            Clique na busca para iniciar
          </span>
        </div>
      </div>
    );
  }
}
