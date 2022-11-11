import React from "react";
import { BsTelegram, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://t.me/bekzodturgunoff">
        <BsTelegram />
      </a>
    </div>
    <div>
      <a href="https://github.com/bekzodturgunoff">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/turgunoffbekzod_c">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
