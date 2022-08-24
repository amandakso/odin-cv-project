import EducationInfo from './Education';

const EducationContainer =({edus, onDelete}) => {
    const educations = edus.map((edu) => (
        <EducationInfo 
            key = {edu.id}
            id = {edu.id}
            edu = {edu}
            onDelete = {onDelete}
        ></EducationInfo>
    ));

  return (
    <div>
        {educations}
    </div>
    );
  }

  export default EducationContainer;