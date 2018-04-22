import React from 'react';
import logo from './../images/logo.png';

class HeaderComponent extends React.Component {    

    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="logo-box">
                        <img className="logo" src={logo} alt="Trusting Logo"/>
                        <span>Trusting News</span>
                    </div>
                    <button className="btn primary login">Login</button>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
