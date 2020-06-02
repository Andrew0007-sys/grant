import React from 'react';
import './BurgerButton.scss';

function BurgerButton(props) {
    return (

        <div className="BurgerButton " onClick={props.toggleMenu}>
            <div className={props.isMenuOpen ? "active" : "passive"} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div >
        </div >


    )
}

export default BurgerButton;
