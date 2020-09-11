import React from "react";

const About = () => {
  return (
    <div style={{ height: "800px" }}>
      <h3>Hi,</h3>
      <p>I created this app as part of my learning journey.</p>
      <p>
        It uses <a aria-label="Jikan API" href="https://jikan.docs.apiary.io/" title="Jikan API" style={{color: "skyblue"}} >Jikan API </a>
        for searching animes.
      </p>
      <br/>
      <p><strong>Developer: </strong><a href="https://github.com/ookil?tab=repositories">ookil</a></p>
      <br/>
      <small>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart" style={{color: "skyblue"}}>smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
    </div>
  );
};

export default About
