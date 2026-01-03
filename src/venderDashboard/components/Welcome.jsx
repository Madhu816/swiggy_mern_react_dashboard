import React from 'react';

const Welcome = () => {
  const rawName = localStorage.getItem("firmname");
  const firmName = rawName ? rawName.toUpperCase() : "YOUR FIRM";

  return (
    <div className='welcomeSection'>
      <center>
      <h2>WELCOME TO : {firmName} RESTARENT</h2>
      <p style={{fontweight:"bold" ,color:"green"}}>Go to NavBar Add your Restarent Details....</p>
      <img src="/assests/chefAunty.jpg" alt="chef Aunty"
      style={{width: "200px", marginTop: "10px", borderRadius: "10px" }} />
    </center>
    </div>
  );
};
export default Welcome;
