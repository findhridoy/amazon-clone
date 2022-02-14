import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <Link className="footer__link" to="conditions">
            Conditions of Use
          </Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to="privacy">
            Privacy Notice
          </Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to="privacy">
            Interst-Based Ads
          </Link>
        </li>
        <li className="footer__item">
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </li>
      </ul>
    </div>
  );
};

export default Footer;
