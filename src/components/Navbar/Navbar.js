import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/images/logo/academy2.svg';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';

import './Navbar.scss';


function Navbar(props) {
    let lang = props.lang ? uaLang : enLang;
    const { ua, en } = lang.lang;
    const { home, aboutUs, grantProgram, programPlan, signIn, courses } = lang.navbar;
    return (

        <section className="Navbar">
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
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
                    </div>

                    <nav className="items">
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="header"
                                smooth={true}
                                // offset={50}
                                duration={500}
                            >{home}</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="aboutUs"
                                duration={500}
                                smooth={true}
                                offset={-40}

                            >{aboutUs}</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="grantProgram"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >{grantProgram}</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="programPlan"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >{programPlan}</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="signUp"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >{signIn}</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="courses"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >{courses}</Link></div>

                    </nav>
                </div>


            </div>

        </section>
    )
}

export default Navbar;


