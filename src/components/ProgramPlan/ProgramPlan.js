import React from 'react';
import './ProgramPlan.scss';
import softServe from "../../assets/images/teachers/Lubomir.jpg";
import eleks from "../../assets/images/teachers/Natalya.jpg";
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';


function ProgramPlan(props) {
    let lang = props.lang ? uaLang : enLang;
    const {
        title,
        items,
        teachers: {
            teachersTitle,
            teacher_1: { name_1, position_1 },
            teacher_2: { name_2, position_2 }
        }
    } = lang.programPlan;
    return (
        <section id="programPlan" className="ProgramPlan">
            <div className="container">
                <div className="wrapper">
                    <h2 className="title">{title}</h2>
                    <div className="items">
                        <div className="item">{items[0]}</div>
                        <div className="item">{items[1]}</div>
                        <div className="item">{items[2]}</div>
                        <div className="item">{items[3]}</div>
                        <div className="item">{items[4]}</div>
                        <div className="item">{items[5]}</div>
                        <div className="item">{items[6]}</div>
                        <div className="item">{items[7]}</div>
                        <div className="item">{items[8]}</div>
                    </div>
                    <h2 className="title mt-5">{teachersTitle}</h2>
                    <div className="teachers row">
                        <div className="teacher col-12 col-md-6">
                            <div className=""><img src={softServe} alt="" className="teacherImage" /></div>
                            <h3 className="name">{name_1}</h3>
                            <div className="position">{position_1}</div>
                        </div>
                        <div className="teacher col-12 col-md-6">
                            <div className=""><img src={eleks} alt="" className="teacherImage" /></div>
                            <h3 className="name">{name_2}</h3>
                            <div className="position">{position_2}</div>

                        </div>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default ProgramPlan
