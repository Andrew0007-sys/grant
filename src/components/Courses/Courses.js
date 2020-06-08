import React from 'react';
import './Courses.scss';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';
import react from '../../assets/images/courses/react 1.svg';
import qc from '../../assets/images/courses/qa 1.svg';
import java from '../../assets/images/courses/java 1.svg';
import frontend from '../../assets/images/courses/frontend 1.svg';
import hr from '../../assets/images/courses/hrinit 1.svg';
import pm from '../../assets/images/courses/Project management 1.svg';
import CourseCard from './CourseCard/CourseCard';





function Courses(props) {
    let lang = props.lang ? uaLang : enLang;
    const { sectionTitle_1, sectionTitle_2, start, soon, project, mentor, test, button } = lang.courses;

    return (
        <section id="courses" className="Courses container-fluid">
            <div className="container">
                <div className="wrapper">
                    <h2 className="sectionTitle">{sectionTitle_1}<br />{sectionTitle_2}</h2>
                    <div className="items">

                        <CourseCard
                            course={qc}
                            date="05.06.2020"
                            start={start}
                            project={project}
                            mentor={mentor}
                            test={test}
                            price="4950"
                            link="https://go.itca.if.ua/qualitycontrolcourses"
                            button={button}
                            disabled={false}
                        />
                        <CourseCard
                            course={java}
                            date="09.06.2020"
                            start={start}
                            project={project}
                            mentor={mentor}
                            test={test}
                            price="5500"
                            link="https://go.itca.if.ua/javacourse"
                            button={button}
                            disabled={false}
                        />
                        <CourseCard
                            course={frontend}
                            date="06.07.2020"
                            start={start}
                            project={project}
                            mentor={mentor}
                            test={test}
                            price="5500"
                            link="https://go.itca.if.ua/frontend"
                            button={button}
                            disabled={false}
                        />
                        <CourseCard
                            course={hr}
                            date="23.06.2020"
                            start={start}
                            project={project}
                            mentor={mentor}
                            test={test}
                            price="5500"
                            link="https://go.itca.if.ua/hrcourses"
                            button={button}
                            disabled={false}
                        />
                        <CourseCard
                            course={pm}
                            date="25.06.2020"
                            start={start}
                            project={project}
                            mentor={mentor}
                            test={test}
                            price="5500"
                            link="https://go.itca.if.ua/projectmanagement"
                            button={button}
                            disabled={false}
                        />
                        <CourseCard
                            course={react}
                            date=""
                            start={soon}
                            project={project}
                            mentor={mentor}
                            test={test}
                            price="4400"
                            link="http://www.google.com"
                            button={button}
                            disabled={true}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Courses
