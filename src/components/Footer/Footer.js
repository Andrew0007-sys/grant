import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import footerLogo2 from '../../assets/images/logo/academy2.svg';
import './Footer.scss';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';

function Footer(props) {
    let lang = props.lang ? uaLang : enLang;
    const { phone, email } = lang.footer;
    return (
        <footer id="footer" className="Footer ">
            <div className="container">
                <div className=" wrapper  row">
                    <div className=" footerLogo col-12 col-md-6 ">

                        <img src={footerLogo2} alt="logo" />
                    </div>

                    <div className="socials col-12 col-md-6 ">
                        <div className="socialItem">
                            <a className="socialLink" href="https://m.facebook.com/itclusteracademy/" target="blank">
                                <FontAwesomeIcon
                                    className="socialIcon"
                                    icon={faFacebookF}

                                />
                            </a>
                        </div>
                        <div className="socialItem">
                            <a className="socialLink" href="https://www.instagram.com/itcluster_academy/?igshid=pcmue6cyzyu2" target="blank">
                                <FontAwesomeIcon
                                    className="socialIcon"
                                    icon={faInstagram}

                                />
                            </a>
                        </div>
                        <div className="socialItem">
                            <a className="socialLink" href="https://www.linkedin.com/company/it-cluster-academy" target="blank">
                                <FontAwesomeIcon
                                    className="socialIcon"
                                    icon={faLinkedinIn}

                                />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="row ">
                    <div className="infoOnline col-12 col-md-6 ">
                        <div className="title">IT Cluster Academy online</div>
                        <div className="phone">{phone}:
                        <a href="tel:+380636741219" className="phoneLink" > +38 (063) 674 12 19</a>
                        </div>
                        <div className="email">{email}: recruitacademyit@gmail.com</div>
                    </div>
                    <div className="info col-12 col-md-6">
                        <div className="title">IT Cluster Academy</div>
                        <div className="phone">{phone}:
                        <a href="tel:+380986554529" className="phoneLink" > +38 (098) 655 45 29</a>
                        </div>
                        <div className="email">{email}: itcaedu.online@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bottomBar'>
                <div className="copyright">© {new Date().getUTCFullYear()} | Copyright | All rights reserved</div>
            </div>
        </footer>
    )
}

export default Footer;

