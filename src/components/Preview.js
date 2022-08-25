import React from 'react';

const PreviewForm =({info, jobs, edus}) => {
    const information = (<ul>
    <li>{info.first} {info.last}</li>
    <li>{info.email}</li>
    <li>{info.phone}</li>
</ul>)
    const educations = edus.map((edu) => ( <li key={edu.id}><p>{edu.school}</p> <p>{edu.degree}</p><p>{edu.gradStart} {'- '} {edu.gradEnd}</p></li>
    ));

    const works = jobs.map((job) => (
        <li key={job.id}><p>{job.company}</p> <p>{job.position}</p><p>{job.description}</p><p>{job.jobStart} {'- '} {job.jobEnd}</p></li>
    ));

    return(
       <div>
        {information}
        <ul>
            {educations}
        </ul>
        <ul>
        {works}
        </ul>
       </div>
    );
}

export default PreviewForm;