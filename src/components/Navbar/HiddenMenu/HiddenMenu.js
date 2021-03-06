import React from 'react';
import './HiddenMenu.scss';
import { Link } from 'react-scroll';
import Logo from '../../../assets/images/logo/academy.svg';
import enLang from '../../../assets/language/en.json';
import uaLang from '../../../assets/language/ua.json';

function HiddenMenu(props) {
    let lang = props.lang ? uaLang : enLang;
    const { ua, en } = lang.lang;
    const { home, aboutUs, grantProgram, programPlan, signIn, courses } = lang.navbar;
    return (
        <div className="HiddenMenu"
            style={props.isMenuOpen ? { transform: "translateX(0)" } : null} onClick={props.toggleMenu}>
            <div className="wrapper" >
                <div className="menu">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="langButtons">
                        <div
                            className={props.uaActive ? "button active" : "button"}
                            onClick={props.getUaLang}

                        >{ua}</div> |
                        <div
                            className={props.enActive ? "button active" : "button"}
                            onClick={props.getEnLang}
                        >{en}</div>
                    </div>
                    <nav className="items">
                        <nav className="items">
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="header"
                                    smooth={true}
                                    // offset={50}
                                    duration={500}
                                    onClick={props.toggleMenu}

                                >{home}</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="aboutUs"
                                    duration={500}
                                    smooth={true}
                                    // offset={-80}
                                    onClick={props.toggleMenu}

                                >{aboutUs}</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="grantProgram"
                                    duration={500}
                                    smooth={true}
                                    // offset={-80}
                                    onClick={props.toggleMenu}

                                >{grantProgram}</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="programPlan"
                                    duration={500}
                                    smooth={true}
                                    // offset={-80}
                                    onClick={props.toggleMenu}

                                >{programPlan}</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="signUp"
                                    duration={500}
                                    smooth={true}
                                    // offset={-80}
                                    onClick={props.toggleMenu}

                                >{signIn}</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="courses"
                                    duration={500}
                                    smooth={true}
                                    // offset={-80}
                                    onClick={props.toggleMenu}

                                >{courses}</Link></div>
                        </nav>
                    </nav>

                </div>
            </div>
        </div >
    )
}

export default HiddenMenu;
