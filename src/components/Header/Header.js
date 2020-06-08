import React from 'react';
import { Link } from 'react-scroll';
import './Header.scss';
import Partners from './Partners/Partners';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';

function Header(props) {
    let lang = props.lang ? uaLang : enLang;
    const { title, text, button, partnersTitle } = lang.header;

    return (
        <header id="header" className="Header">
            <div className="container">
                <div className="wrapper row ">
                    <div className="contentLeft col-12 order-2 order-lg-1 col-lg-5">
                        <h1 className="title">{title}</h1>
                        <div className="text">{text}</div>
                        <div className="registrationButton ">
                            <Link
                                className="registrationLink"
                                to="signUp"
                                duration={500}
                                smooth={true}
                                offset={-80}
                            >{button}</Link>
                        </div>
                    </div>
                    <div className="contentRight col-12 order-1 order-lg-2 col-lg-6">
                    </div>
                </div>
                <h2 className="partnersTitle">{partnersTitle}</h2>
                <Partners />
            </div>


        </header>
    )
}

export default Header
