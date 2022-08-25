import EducationInfo from './Education';

const EducationContainer =({edus, onDelete, onEdit}) => {
    const educations = edus.map((edu) => (
        <EducationInfo 
            key = {edu.id}
            id = {edu.id}
            edu = {edu}
            onDelete = {onDelete}
            onEdit = {onEdit}
        ></EducationInfo>
    ));

  return (
    <div className="eduInfo">
        {educations}
    </div>
    );
  }

  export default EducationContainer;