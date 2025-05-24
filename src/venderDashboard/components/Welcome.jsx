// import React from 'react'

// const Welcome = () => {
//     const firmName = localStorage.getItem("firmname")

//   return (
//     <div className='welcomeSection'>
//         <h2>Welcome {firmName}</h2>
//         <div className="landingImage">
//           <img src='/assets/chefAunty.jpg' alt='welcome' />
//         </div>
//     </div>
//   )
// }

// export default Welcome


import React from 'react';
import chefAunty from '@/assets/chefAunty.jpg'; // alias-based absolute path

const Welcome = () => {
  const firmName = localStorage.getItem("firmname");

  return (
    <div className='welcomeSection'>
      <h2>Welcome {firmName || "Guest"}</h2>
      <div className="landingImage">
        <img src={chefAunty} alt="welcome" />
      </div>
    </div>
  );
};

export default Welcome;

