import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  let history = useHistory();

  const remove = () => {
    /**
     * Removing acces token due to logout and redirectig to home page
     */
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div>
      <Navbar dark className="bg-dark" expand="sm">
        <div className="container">
          <NavbarBrand href="/" className="mr-auto">
            <img
              src="https://bitfountain.co/wp-content/uploads/2019/04/cropped-bitfountain.png"
              width="40"
              alt="logo"
            />
          </NavbarBrand>
          <div>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    exact
                    to={"/modeltype"}
                    className="nav-link btn text-white ml-2 btn-primary nav-sm btn-sm"
                  >
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    exact
                    to={"/devicemodel"}
                    className="nav-link btn text-white ml-2 btn-primary nav-sm btn-sm"
                  >
                    Add new model
                  </NavLink>
                </NavItem>
                <NavItem
                  className="nav-link btn text-white ml-2 btn-primary nav-sm btn-sm"
                  onClick={remove}
                >
                  Logout
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
