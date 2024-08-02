import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I'm a Web Developer from Congo but I leave In Nairobi, Kenya</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
