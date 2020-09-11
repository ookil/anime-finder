import React from "react";

const About = () => {
  return (
    <div style={{ height: "800px" }}>
      <h3>Hi,</h3>
      <p>I created this app as part of my learning journey.</p>
      <p>
        It uses <a aria-label="Jikan API link" href="https://jikan.docs.apiary.io/" style={{color: "skyblue"}} >Jikan API </a>
        for searching animes.
      </p>
      <br/>
      <p><strong>Developer: </strong><a href="https://github.com/ookil?tab=repositories">ookil</a></p>
    </div>
  );
};

export default About
