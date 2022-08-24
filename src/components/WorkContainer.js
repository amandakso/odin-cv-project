import WorkInfo from './Work';

const WorkContainer =({jobs, onDelete, onEdit}) => {
    const works = jobs.map((job) => (
        <WorkInfo 
            key = {job.id}
            id = {job.id}
            job = {job}
            onDelete = {onDelete}
            onEdit = {onEdit}
        ></WorkInfo>
    ));

  return (
    <div>
        {works}
    </div>
    );
  }

  export default WorkContainer;