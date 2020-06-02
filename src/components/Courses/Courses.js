import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHryvnia } from '@fortawesome/free-solid-svg-icons'
import './Courses.scss';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';

function Courses(props) {
    let lang = props.lang ? uaLang : enLang;
    const { sectionTitle_1, sectionTitle_2, start, soon, project, mentor, test, button } = lang.courses;

    return (
        <section id="courses" className="Courses">
            <div className="container">
                <div className="wrapper">
                    <h2 className="sectionTitle">{sectionTitle_1}<br />{sectionTitle_2}</h2>
                    <div className="items">
                        <div className="item">
                            <div className="title">QC</div>
                            <div className="start">{start}: 05.06.2020</div>
                            <div className="text">
                                <FontAwesomeIcon
                                    className="courseIcon"
                                    icon={faCheck}
                                />
                                Soft Skills</div>
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
                                />4950 грн</div>
                            <div className="button">
                                <a href="https://go.itca.if.ua/qualitycontrolcourses" className="link">{button}</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="title">Java</div>
                            <div className="start">{start}: 09.06.2020</div>
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
                                />5500 грн</div>
                            <div className="button"><a href="https://go.itca.if.ua/javacourse" className="link">{button}</a></div>
                        </div>

                        <div className="item">
                            <div className="title">Front End</div>
                            <div className="start">{start}: 06.07.2020</div>
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
                                />5500 грн</div>
                            <div className="button"><a href="https://go.itca.if.ua/frontend" className="link">{button}</a></div>
                        </div>

                        <div className="item">
                            <div className="title">HR in IT</div>
                            <div className="start">{start}: 23.06.2020</div>
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
                                />5500 грн</div>
                            <div className="button"><a href="https://go.itca.if.ua/hrcourses" className="link">{button}</a></div>
                        </div>
                        <div className="item">
                            <div className="title">Project Management</div>
                            <div className="start">{start}: 25.06.2020</div>
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
                                />5500 грн</div>
                            <div className="button"><a href="https://go.itca.if.ua/projectmanagement" className="link">{button}</a></div>
                        </div>
                        <div className="item">
                            <div className="title">React</div>
                            <div className="start">{soon}</div>
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
                                />4400 грн</div>
                            <div className="button disabled" ><a href="" className="link " onClick={(e) => e.preventDefault()}>{button}</a></div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Courses
