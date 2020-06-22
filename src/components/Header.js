import React, { Fragment } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { action } = this.props;
    return (
      <Fragment>
        <Navbar id="firstNav" sticky="top">
          
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
