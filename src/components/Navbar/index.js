import React from "react";
import { connect } from "react-redux";

import "./style.css";

import logo from "../../assets/logo-nav.png";
import searchIcon from "../../assets/ic-search-copy.png";

import { toggleSearchBar } from "../../redux/actions/homeActions";
import { searchCompany, backToHome } from "../../redux/actions/companyActions";

class Navbar extends React.Component {
  handleSearch = (e) => {
    const str = e.target.value;
    const { searchCompany } = this.props;

    searchCompany(str);
  };

  handleGoBack = () => {
    const { backToHome } = this.props;

    backToHome();
  };

  render() {
    const {
      toggleSearchBar,
      showSearchBar,
      showCompanyScreen,
      company,
    } = this.props;

    const { enterprise_name } = company;

    return (
      <div className="navbar">
        {!showSearchBar && !showCompanyScreen && (
          <img className="navbar__logo" src={logo} alt="Logo da ioasys" />
        )}
        {showSearchBar && !showCompanyScreen && (
          <input
            className="navbar__search-bar"
            placeholder="Pesquisar"
            type="text"
            onKeyUp={(e) => {
              this.handleSearch(e);
            }}
          />
        )}
        {!showCompanyScreen && (
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
        )}
        {showCompanyScreen && (
          <div className="navbar__company">
            <span
              className="navbar__back-to-home"
              onClick={() => {
                this.handleGoBack();
              }}
            >
              voltar
            </span>
            <h4 className="navbar__company-name">{enterprise_name}</h4>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { home, company } = state;
  return {
    showSearchBar: home.showSearchBar,
    showCompanyScreen: company.showCompanyScreen,
    company: company.selectedCompany,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearchBar: () => dispatch(toggleSearchBar()),
    searchCompany: (str) => dispatch(searchCompany(str)),
    backToHome: () => dispatch(backToHome()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
