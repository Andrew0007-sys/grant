import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHryvnia } from '@fortawesome/free-solid-svg-icons'
import './CourseCard.scss'

function CourseCard(props) {
    const { course, date, start, project, mentor, test, price, link, button, disabled } = props;
    return (
        <div className="CourseCard">
            <img className="header" src={course} alt="" />
            <div className="start">{start} {date}</div>
            <div className="text">
                <FontAwesomeIcon
                    className="courseIcon"
                    icon={faCheck}
                />Soft Skills</div>
            <div className="text">
                <FontAwesomeIcon
                    className="courseIcon"
                    icon={faCheck}
                />{project}</div>
            <div className="text">
                <FontAwesomeIcon
                    className="courseIcon"
                    icon={faCheck}
                />{mentor}</div>
            <div className="text">
                <FontAwesomeIcon
                    className="courseIcon"
                    icon={faCheck}
                />{test}</div>
            <div className="price">
                <FontAwesomeIcon
                    className="courseIcon"
                    icon={faHryvnia}
                />{price} грн</div>
            <div className={disabled ? "button disabled" : "button"}>
                <a
                    href={link}
                    className="link"
                    target="blank"
                    onClick={disabled ? (e) => e.preventDefault() : null}
                >{button}</a>
            </div>
        </div>
    )
}

export default CourseCard;
