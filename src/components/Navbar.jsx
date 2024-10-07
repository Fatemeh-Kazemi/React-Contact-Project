import React from "react";
import { useLocation } from "react-router-dom";
import SearchContact from "./contact/SearchContact";
import { PURPLE, BACKGROUND } from "../helpers/colors";

const Navbar = ({ query, search }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-dark navbar-expand-sm shadow-lg"
        style={{ background: BACKGROUND }}
      >
        <div className="container">
          <div className="row w-100">
            <div className="col">
              <div className="navbar-brand">
                <i className="fa fa-id-badge" style={{ color: PURPLE }}></i> وب
                اپلیکیشن مدیریت <span style={{ color: PURPLE }}>مخاطبین </span>
              </div>
            </div>
            {location.pathname === "/contacts" ? (
              <div className="col">
                <SearchContact query={query} search={search} />
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
