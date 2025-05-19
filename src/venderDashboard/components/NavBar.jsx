import React from 'react'

const NavBar = ({OnLoginClick,OnRegister}) => {
    return (
        <div className="navSection">
            <div className="company">Vender-DashBoard</div>
                <div className="userAuth">
                    <span onClick={OnLoginClick}>Login/</span>
                    <span onClick={OnRegister}>Register</span>
                </div>
        </div>

    )
}

export default NavBar
