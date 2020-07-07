import React from "react";
import logo from "../../assets/logo-nav.png";
import searchIcon from "../../assets/ic-search-copy.png";
import { connect } from "react-redux";
import { toggleSearchBar } from "../../redux/actions/homeActions";

import "./style.css";

class Home extends React.Component {
  render() {
    const { showSearchBar, toggleSearchBar } = this.props;
    return (
      <div className="home">
        <div className="navbar">
          {!showSearchBar && (
            <img className="navbar__logo" src={logo} alt="Logo da ioasys" />
          )}
          {showSearchBar && (
            <input
              className="navbar__search-bar"
              placeholder="Pesquisar"
              type="text"
            />
          )}
          <img
            className={`navbar__search-icon navbar__search-icon--${
              showSearchBar ? "align-left" : "align-right"
            }`}
            src={searchIcon}
            alt="pesquisar"
            onClick={() => {
              toggleSearchBar();
            }}
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

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearchBar: () => dispatch(toggleSearchBar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
