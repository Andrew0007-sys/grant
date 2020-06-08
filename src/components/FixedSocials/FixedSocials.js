import React from 'react';
import './FixedSocials.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane, faViber, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';


function FixedSocials(props) {
    console.log(props);

    return (
        <div className="FixedSocials" onClick={props.toggleFixedSocials} >

            <div className={!props.isFixedSocialsOpen ? "iconsClosed" : "iconsOpened"} >

                {!props.isFixedSocialsOpen ?
                    <>
                        <div className="wrap">
                            <svg className="iconWrite" width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2667 12.6981H23.3667M11.2667 16.4717H23.3667M4.8104 23.5777C2.4311 21.1909 1 18.1215 1 14.7736C1 7.16679 8.38723 1 17.5 1C26.6128 1 34 7.16679 34 14.7736C34 22.3804 26.6128 28.5472 17.5 28.5472C15.6278 28.5472 13.8286 28.2868 12.1511 27.8072L12 27.7925L5.03333 31V23.8219L4.8104 23.5777Z" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> </svg>

                        </div>
                        <div className="telegram" >
                            <a className="telegramLink" href="https://t.me/ITforallpeople" target="_blank">
                                <FontAwesomeIcon
                                    className="telegramIcon"
                                    icon={faTelegramPlane}
                                />
                            </a>
                        </div>
                        <div className="viber">
                            <a className="viberLink" href="viber://chat?number=%2B0986554529" target="_blank">
                                <FontAwesomeIcon
                                    className="viberIcon"
                                    icon={faViber}
                                />
                            </a>
                        </div>
                        <div className="messenger">
                            <a className="messengerLink" href="https://m.me/itclusteracademy/" target="_blank">
                                <FontAwesomeIcon
                                    className="messengerIcon"
                                    icon={faFacebookMessenger}
                                />
                            </a>
                        </div>
                        <div className="email">
                            <a className="emailLink" href="mailto:itcaedu.online@gmail.com" target="_blank">
                                <FontAwesomeIcon
                                    className="emailIcon"
                                    icon={faEnvelope}
                                />
                            </a>
                        </div>
                        <div className="phone">
                            <a className="phoneLink" href="tel:+380986554529" target="_blank">
                                <FontAwesomeIcon
                                    className="phoneIcon"
                                    icon={faPhoneAlt}
                                />
                            </a>
                        </div>

                    </> :
                    <>
                        <div className="wrap">
                            <FontAwesomeIcon
                                className="iconClose"
                                icon={faTimes}
                            />
                        </div>
                        <div className="telegram" >
                            <div className="message">Telegram</div>

                            <a className="telegramLink" href="https://t.me/ITforallpeople" target="_blank">
                                <FontAwesomeIcon
                                    className="telegramIcon"
                                    icon={faTelegramPlane}
                                />
                            </a>
                        </div>
                        <div className="viber">
                            <div className="message">Viber</div>

                            <a className="viberLink" href="viber://chat?number=%2B0986554529" target="_blank">
                                <FontAwesomeIcon
                                    className="viberIcon"
                                    icon={faViber}
                                />
                            </a>
                        </div>
                        <div className="messenger">
                            <div className="message">Messenger</div>

                            <a className="messengerLink" href="https://m.me/itclusteracademy/" target="_blank">
                                <FontAwesomeIcon
                                    className="messengerIcon"
                                    icon={faFacebookMessenger}
                                />
                            </a>
                        </div>
                        <div className="email">
                            <div className="message">Email</div>

                            <a className="emailLink" href="mailto:itcaedu.online@gmail.com" target="_blank">
                                <FontAwesomeIcon
                                    className="emailIcon"
                                    icon={faEnvelope}
                                />
                            </a>
                        </div>
                        <div className="phone">
                            <div className="message">Phone</div>

                            <a className="phoneLink" href="tel:+380986554529" target="_blank">
                                <FontAwesomeIcon
                                    className="phoneIcon"
                                    icon={faPhoneAlt}
                                />
                            </a>
                        </div>
                    </>
                }






            </div>


        </div >
    )
}

export default FixedSocials;
