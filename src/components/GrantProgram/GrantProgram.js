import React from 'react';
import { Link } from 'react-scroll';
import './GrantProgram.scss';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';

function GrantProgram(props) {
    let lang = props.lang ? uaLang : enLang;
    const { programTitle, programText, partisipationTitle, partisipationText, button } = lang.grantProgram;
    return (
        <section id="grantProgram" className="GrantProgram">
            <div className="container">
                <div className="wrapper row">
                    <h2 className="title col-12">{programTitle}</h2>
                    <div className="contentLeft col-12 col-md-7">
                    </div>
                    <div className="contentRight col-12 col-md-5">
                        <div className="text ">{programText}</div>
                    </div>
                    <h2 className="title col-12 mt-5">{partisipationTitle}</h2>
                    <div className="contentLeft col-12 col-md-7">
                    </div>
                    <div className="contentRight col-12 col-md-5">
                        <div className="text ">{partisipationText}</div>
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
                </div>
            </div>
        </section>
    )
}

export default GrantProgram;
