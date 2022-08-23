import React from 'react';

const EducationInfo = (props) => {
    const {edus} = props;
    return (
        <ul>
            {edus.map((edu) => {
                return <li key={edu.id}><p>{edu.school}</p> <p>{edu.degree}</p>{edu.gradStart} {'- '} {edu.gradEnd}</li>;
            })}
        </ul>
    );
}

export default EducationInfo;