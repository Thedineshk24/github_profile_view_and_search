import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

// importing Link from react router dom
import { Link } from "react-router-dom";

// usercontext
import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Github Profile Searcher App
        </Link>
      </NavbarBrand>

      <NavbarText className="text-white">
        {/* context.user?.email  is chained or extracted after that this syntax will work fine ==> context.user.email */}
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem className="ml-auto">
              <NavLink tag={Link} to="/" className="text-white">
                logout
              </NavLink>
            </NavItem>
          ) : (
            <React.Fragment>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  Signup
                </NavLink>
              </NavItem>

              <NavItem className="ml-auto">
                <NavLink tag={Link} to="/signin" className="text-white">
                  Signin
                </NavLink>
              </NavItem>
            </React.Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
