import React from 'react';
import {Link} from 'react-router-dom';
import './shared.css';

function Navbar(props) {

    return (
        <div className='Navbar-layout'>
            <div className='Navbar-links'>
                <Link className='Navbar-click' to='/'>Home</Link>
                <Link className='Navbar-click' to='/projects'>Projects</Link>
                <div className='Navbar-click' onClick={() => props.handleDisplayContact()}>Contact Me</div>
            </div>
            <h1 className='Navbar-username'>
                {props.contactInfo.full_name}
            </h1>
        </div>
    );
}

export default Navbar;