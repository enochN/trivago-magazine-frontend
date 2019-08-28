import React from "react";
import footer_logo from "../../assets/trivago_logo_white.svg";
import { Link } from "react-router-dom";

function MagazineFooter() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Link to="/">
          <img src={footer_logo} alt="trivago logo" />
        </Link>
      </div>
    </footer>
  );
}

export default MagazineFooter;
