import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/90022866?s=400&u=da87bf3a0b6a85dc6eff45cca1e7a6003e871d02&v=4"}
          alt="Founder"
        />

        <h2>Bittu Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/bittu-kumar-7600a51b4/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/b2kumar.810/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/B2-Kumar" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
