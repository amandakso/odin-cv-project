import WorkInfo from './Work';

const WorkContainer =({jobs, onDelete}) => {
    const works = jobs.map((job) => (
        <WorkInfo 
            key = {job.id}
            id = {job.id}
            job = {job}
            onDelete = {onDelete}
        ></WorkInfo>
    ));

  return (
    <div>
        {works}
    </div>
    );
  }

  export default WorkContainer;