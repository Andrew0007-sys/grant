import React from 'react';
import './AboutUs.scss';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';

function AboutUs(props) {
    let lang = props.lang ? uaLang : enLang;
    const { title, text } = lang.aboutUs;
    return (
        <section id="aboutUs" className="AboutUs">
            <div className="container">
                <div className="wrapper row">
                    <h2 className="title col-12">{title}</h2>
                    <div className="contentLeft col-12 col-md-7">
                    </div>
                    <div className="contentRight col-12 col-md-5 ">
                        <div className="text ">{text}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
