import React from "react";
import logo from "../../assets/logo-nav.png";
import searchIcon from "../../assets/ic-search-copy.png";
import { connect } from "react-redux";
import { toggleSearchBar, searchString } from "../../redux/actions/homeActions";

import "./style.css";

class Home extends React.Component {
  handleSearch = (e) => {
    const str = e.target.value;
    const { searchString, searchResults } = this.props;
    searchString(str);
    console.log(searchResults);
  };

  render() {
    const { showSearchBar, toggleSearchBar, searchResults } = this.props;
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
              onKeyUp={(e) => {
                this.handleSearch(e);
              }}
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
          {searchResults.length === 0 && (
            <span className="content__empty-state">
              Clique na busca para iniciar
            </span>
          )}
          {searchResults.length > 0 && (
            <div className="content__list">
              <div className="content__single-result">
                <div className="content__result-img"></div>
                <div className="content__result-info">
                  <h3 className="content__result-name">Empresa1</h3>
                  <h5 className="content__result-type">Negócio</h5>
                  <span className="content__result-location">Brasil</span>
                </div>
              </div>
            </div>
          )}
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
    searchString: (str) => dispatch(searchString(str)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
