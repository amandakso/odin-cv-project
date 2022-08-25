import React from 'react';

const PreviewForm =({info, jobs, edus}) => {
    const information = (<ul className="contactInfo">
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
       <div className="cv">
        <div>
            {information}
        </div>
        <div className="eduSection">
            <h4>Education: </h4>
            <ul>
                {educations}
            </ul>
        </div>
        <div className="workSection">
            <h4>Work Experience: </h4>
            <ul>
            {works}
            </ul>
        </div>
       </div>
    );
}

export default PreviewForm;