import React from 'react';
import './ProgramCard.scss'

function ProgramCard({ text, link }) {
    return (
        <div className="ProgramCard">

            <div className="itemImage" style={{ backgroundImage: `url(${link})` }}></div>
            <div className="itemText">{text}</div>

        </div>
    )
}

export default ProgramCard;
