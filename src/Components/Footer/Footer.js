import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Footer.css";

const Footer = () => {
  return (
    <div
    className='footer'
      // style={{ display: "flex", justifyContent: "center", marginTop: "4rem", backgroundColor:'lightcoral', width:'100vw', bottom:'0' }}
    >
<h4>Site réalisé par Antony Jacques en React JS</h4>
<h5>2021</h5>
    </div>
  );
};

export default Footer;
