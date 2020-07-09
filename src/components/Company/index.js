import React from "react";
import { connect } from "react-redux";

import "./style.css";

class Company extends React.Component {
  render() {
    const { company } = this.props;
    const { enterprise_name, description } = company;
    const capitalLetter = enterprise_name[0];

    return (
      <div className="company">
        <div className="card">
          <div className="card__img">{capitalLetter}</div>
          <div className="card__text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { company } = state;
  return {
    company: company.selectedCompany,
  };
};

export default connect(mapStateToProps, null)(Company);
