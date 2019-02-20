import React from 'react';
import logo from '../../assets/trivago_logo.svg';
import {Link} from "react-router-dom";

export default (props) => (
    <header className="magazine-header">
        <div className="container-wide">
            <div className="fixed-header">
                <Link to="/">
                    <img src={logo} className="logo" alt="logo" style={{display:"inline-block"}} />
                </Link>
            </div>
        </div>
    </header>
)