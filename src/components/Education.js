import React from 'react';

const EducationInfo = ({id, edu, onDelete, onEdit}) => {
    return (
    <li key={id}><p>{edu.school}</p> <p>{edu.degree}</p><p>{edu.gradStart} {'- '} {edu.gradEnd}</p><button onClick={() => onDelete(id)}>Delete</button><button onClick={() => onEdit(id)}>Edit</button></li>
    );
}

export default EducationInfo;