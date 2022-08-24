import React from 'react';

const WorkInfo = (props) => {
    const {jobs} = props;
    return (
        <ul>
            {jobs.map((job) => {
                return <li key={job.id}><p>{job.company}</p> <p>{job.position}</p><p>{job.description}</p><p>{job.jobStart} {'- '} {job.jobEnd}</p></li>;
            })}
        </ul>
    );
}

export default WorkInfo;