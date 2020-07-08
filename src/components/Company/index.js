import React from "react";
import { connect } from "react-redux";
import "./style.css";

class Company extends React.Component {
  render() {
    return (
      <div className="company">
        <div className="card">
          <div className="card__img"></div>
          <div className="card__text">
            <p>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps, null)(Company);
