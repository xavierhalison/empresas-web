import React from "react";
import { connect } from "react-redux";

import "./style.css";

import { goToCompanyScreen } from "../../redux/actions/homeActions";

class Home extends React.Component {
  handleCompanySelection() {
    const { goToCompanyScreen } = this.props;
    goToCompanyScreen("Empresa", "img", "text");
  }
  render() {
    const { searchResults } = this.props;
    return (
      <div className="content">
        {searchResults.length === 0 && (
          <span className="content__empty-state">
            Clique na busca para iniciar
          </span>
        )}
        {searchResults.length > 0 && (
          <div className="content__list">
            <div
              className="content__single-result"
              onClick={() => {
                this.handleCompanySelection();
              }}
            >
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
    );
  }
}

const mapStateToProps = (state) => {
  return { searchResults: state.searchResults };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToCompanyScreen: (name, img, text) =>
      dispatch(goToCompanyScreen(name, img, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
