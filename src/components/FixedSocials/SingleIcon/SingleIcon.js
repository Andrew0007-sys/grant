import React from 'react';
import './SingleIcon.scss';


function SingleIcon() {
    return (
        <div className="SingleIcon">
            <FontAwesomeIcon
                className="iconClose"
                icon={faTimes}
            />
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
        </div >
    )
}

export default SingleIcon;
