import React from "react";
import logo from "../../assets/logo-home.png";
import mail from "../../assets/ic-email.svg";
import locker from "../../assets/ic-cadeado.svg";
import "./style.css";
import { signIn } from "../../services/auth";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.mailFieldRef = React.createRef();
    this.passwordFieldRef = React.createRef();
  }
  submitHandler() {
    const mail = this.mailFieldRef.current.value;
    const password = this.passwordFieldRef.current.value;
    signIn(mail, password);
  }

  render() {
    return (
      <div className="auth">
        <img className="auth__logo" src={logo} alt="logo" />
        <h3 className="auth__welcome">Bem vindo ao empresas</h3>
        <p className="auth__text">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et
        </p>
        <div className="auth__form-group">
          <div className="auth__single-field">
            <img
              className="auth__icon auth__icon--mail"
              src={mail}
              alt="email"
            />
            <input
              placeholder="E-mail"
              className="auth__field auth__field--mail"
              type="email"
              ref={this.mailFieldRef}
              required
            />
          </div>
          <div className="auth__single-field">
            <img
              className="auth__icon auth__icon--locker"
              src={locker}
              alt="senha"
            />
            <input
              placeholder="Senha"
              className="auth__field auth__field--password"
              type="password"
              ref={this.passwordFieldRef}
            />
          </div>
        </div>
        <button
          onClick={() => {
            this.submitHandler();
          }}
          className="auth__submit"
        >
          Entrar
        </button>
      </div>
    );
  }
}
