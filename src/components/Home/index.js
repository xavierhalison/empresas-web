import React from "react";
import Navbar from "../Navbar";
import { connect } from "react-redux";
import "./style.css";

class Home extends React.Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div className="home">
        <Navbar />
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
    // toggleSearchBar: () => dispatch(toggleSearchBar()),
    // searchString: (str) => dispatch(searchString(str)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
