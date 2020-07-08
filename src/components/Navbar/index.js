import React from "react";
import logo from "../../assets/logo-nav.png";
import searchIcon from "../../assets/ic-search-copy.png";
import "./style.css";
import { connect } from "react-redux";
import { toggleSearchBar, searchString } from "../../redux/actions/homeActions";

class Navbar extends React.Component {
  handleSearch = (e) => {
    const str = e.target.value;
    const { searchString, searchResults } = this.props;
    searchString(str);
    console.log(searchResults);
  };

  render() {
    const { toggleSearchBar, showSearchBar } = this.props;
    return (
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSearchBar: state.showSearchBar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearchBar: () => dispatch(toggleSearchBar()),
    searchString: (str) => dispatch(searchString(str)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
