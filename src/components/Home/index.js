import React from "react";
import { connect } from "react-redux";

import "./style.css";

import { getCompanies, getCompany } from "../../services/company";

class Home extends React.Component {
  constructor(props) {
    super(props);
    getCompanies(this.props.credentials);
  }

  handleCompanySelection(id) {
    getCompany(id, this.props.credentials);
  }

  render() {
    const { onSearch, searchResults, queryLength } = this.props;
    return (
      <div className="content">
        {!onSearch && (
          <span className="content__empty-state">
            Clique na busca para iniciar
          </span>
        )}
        {searchResults.length > 0 && (
          <div className="content__list">
            {searchResults.map((company) => {
              const { enterprise_name, country, id } = company;
              const type = company.enterprise_type.enterprise_type_name;
              const capitalLetter = enterprise_name[0];

              return (
                <div
                  key={id}
                  className="content__single-result"
                  onClick={() => this.handleCompanySelection(id)}
                >
                  <div className="content__result-img">{capitalLetter}</div>
                  <div className="content__result-info">
                    <h3 className="content__result-name">{enterprise_name}</h3>
                    <h5 className="content__result-type">{type}</h5>
                    <span className="content__result-location">{country}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {onSearch && searchResults.length === 0 && queryLength > 0 && (
          <div className="content__no-result">
            Nenhuma empresa foi encontrada para a busca realizada
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { company, home, auth } = state;
  return {
    searchResults: company.filteredCompanies,
    onSearch: home.showSearchBar,
    queryLength: company.queryLength,
    credentials: auth.credentials,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // goToCompanyScreen: (name, img, text) =>
    //   dispatch(goToCompanyScreen(name, img, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
