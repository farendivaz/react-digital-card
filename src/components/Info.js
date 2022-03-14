import React from "react";
import photo from "../photo.png";
import emailLogo from "../email.png";
import "../style.css";

function Info() {
  return (
    <section className="info">
      <img src={photo} alt="Laura Smith" className="info--photo" />
      <h2 className="info--name">Laura Smith</h2>
      <h4 className="info--title">Frontend Developer</h4>
      <small className="info--website">laurasmith.website</small>
      <button className="info--btn">
        <img src={emailLogo} className="email--logo" />
        Email
      </button>
    </section>
  );
}

export default Info;
