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
          {/* <img id="navImage" src="https://thumbs.dreamstime.com/z/grocery-store-delivery-company-s-logo-items-vegetables-home-icon-vector-design-template-167341513.jpg"/>
                    <div className="topnav-right">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2GQC84QrrCIBfaN1krHyjqGtNx02bji5kCQaO6iIBqYAjX9Pl&usqp=CAU" id="userNav" /> */}
          {/* </div> */}
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
