import React from 'react';

const EducationInfo = ({id, edu, onDelete}) => {
    console.log(id);
    console.log(edu);
    return (
    <li key={id}><p>{edu.school}</p> <p>{edu.degree}</p><p>{edu.gradStart} {'- '} {edu.gradEnd}</p><button onClick={() => onDelete(id)}>Delete</button></li>
    );
    /*
    return (
        <ul>
            {edus.map((edu) => {
                return <li key={edu.id}><p>{edu.school}</p> <p>{edu.degree}</p><p>{edu.gradStart} {'- '} {edu.gradEnd}</p><button onClick={() => delete(edu.id)}>Delete</button></li>;
            })}
        </ul>
    );
    */
}

export default EducationInfo;