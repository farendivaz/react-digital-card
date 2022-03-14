import React from "react";
import LinkedinIcon from "../Linkedin Icon.svg";
import TwitterIcon from "../Twitter Icon.svg";
import InstagramIcon from "../Instagram Icon.svg";
import FacebookIcon from "../Facebook Icon.svg";
import GithubIcon from "../GitHub Icon.svg";

function Footer() {
  return (
    <section className="footer">
      <img src={TwitterIcon} />
      <img src={FacebookIcon} />
      <img src={InstagramIcon} />
      <img src={LinkedinIcon} />
      <img src={GithubIcon} />
    </section>
  );
}

export default Footer;
