import React from 'react';

const About = () => {
  return (
    <div
      style={{
        height: '800px',
        background: 'white',
        color: '#1b1b1b',
        padding: '2rem',
        marginTop: '20px',
      }}
    >
      <h3>Hi,</h3>
      <p>I created this app as part of my learning journey.</p>
      <p>
        It uses{' '}
        <a
          aria-label='Jikan API'
          href='https://jikan.docs.apiary.io/'
          title='Jikan API'
          style={{ color: 'skyblue' }}
        >
          Jikan API{' '}
        </a>
        for searching animes.
      </p>
      <br />
      <p>
        <strong>Developer: </strong>
        <a href='https://github.com/ookil?tab=repositories'>ookil</a>
      </p>
      <br />
    </div>
  );
};

export default About;
