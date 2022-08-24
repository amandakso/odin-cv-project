import React from 'react';

const WorkInfo = ({id, job, onDelete}) => {
    return (
    <li key={id}><p>{job.company}</p> <p>{job.position}</p><p>{job.description}</p><p>{job.jobStart} {'- '} {job.jobEnd}</p><button onClick={() => onDelete(id)}>Delete</button></li>
    );
}

export default WorkInfo;