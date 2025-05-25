import React from 'react';

const Welcome = () => {
  const rawName = localStorage.getItem("firmname");
  const firmName = rawName ? rawName.toUpperCase() : "YOUR FIRM";

  return (
    <div className='welcomeSection'>
      <h2>WELCOME TO : {firmName}</h2>

    </div>
  );
};

export default Welcome;
