import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* Main Footer */}
        <footer className="main-footer">
          <strong>Copyright © 2022 </strong>
          Todos Direitos Reservados.
          <div className="float-right d-none d-sm-inline-block">
            <b>Versão</b> 1.0
          </div>
        </footer>
      </div>
    );
  }
}
