import React, { Component } from 'react';
import EducationContainer from './EducationContainer';
import GeneralInfo from './General';
import WorkInfo from './Work';
import uniqid from 'uniqid';

class WholeForm extends Component {
    constructor() {
      super();
      this.state = {
        info: {
          first: '',
          last: '',
          email: '',
          phone: '',
        },
        edu: {
            school: '',
            degree: '',
            gradStart: '',
            gradEnd: '',
            id: uniqid(),
        },
        edus: [],
        job: {
          company: '',
          position: '',
          description: '',
          jobStart: '',
          jobEnd: '',
          id: uniqid(),
        },
        jobs: [],
      };
  
      this.handleInfoChange = this.handleInfoChange.bind(this);
      this.handleEducationChange = this.handleEducationChange.bind(this);
      this.addSchool = this.addSchool.bind(this);
      this.deleteSchool = this.deleteSchool.bind(this);
      this.handleWorkChange = this.handleWorkChange.bind(this);
      this.addJob = this.addJob.bind(this);
    }
  
    handleInfoChange = (e) => {
      let inputName = e.target.name;
      let inputValue = e.target.value;
  
      let statusCopy = this.state;
      statusCopy.info[inputName] = inputValue;
      this.setState(statusCopy)
    }

    handleEducationChange = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
    
        let statusCopy = this.state;
        statusCopy.edu[inputName] = inputValue;
        this.setState(statusCopy)
    }

    addSchool = (e) => {
        e.preventDefault()
        this.setState({
            info : this.state.info,
            edu: {
                school: '',
                degree: '',
                gradStart: '',
                gradEnd: '',
                id: uniqid(),
            },
            edus: this.state.edus.concat(this.state.edu)
          });
        document.getElementById('education').reset()
    } 

    deleteSchool = (id) => {
      this.setState((prevState) => {
        const newEducation = prevState.edus.filter((edu) => edu.id != id)
        return {...prevState, edus: [...newEducation]}
      })
    }

    handleWorkChange = (e) => {
      let inputName = e.target.name;
      let inputValue = e.target.value;
  
      let statusCopy = this.state;
      statusCopy.job[inputName] = inputValue;
      this.setState(statusCopy)

    }

    addJob = (e) => {
      e.preventDefault()
      this.setState({
          info : this.state.info,
          edu: this.state.edu,
          edus: this.state.edus,
          job: {
            company: '',
            position: '',
            job: '',
            jobStart: '',
            jobEnd: '',
            id: uniqid(),
          },
          jobs: this.state.jobs.concat(this.state.job)
        });
      document.getElementById('work').reset()
    } 
  
    render() {
      const { info, edus, jobs } = this.state;
      return (
        <div>
          <form id="general">
            <h3>General Info</h3>
            <label htmlFor="first">First Name: </label>
            <input 
              name="first"
              type="text" 
              id="first"
              onChange={this.handleInfoChange}
            />
            <label htmlFor="last">Last Name: </label>
            <input 
              name="last"
              type="text" 
              id="last"
              onChange={this.handleInfoChange}
            />
            <label htmlFor="email"> Email Address: </label>
            <input  
              name="email"
              type="email" 
              id="email"
              onChange={this.handleInfoChange}
            />
            <label htmlFor="phone">Phone Number: </label>
            <input 
              name="phone"
              type="text" 
              id="phone"
              onChange={this.handleInfoChange}
            />
        </form>
        <form id="education">
            <h3>Education</h3>
            <label htmlFor="school">School Name: </label>
            <input 
              name="school"
              type="text"
              id="school"
              onChange={this.handleEducationChange}
            />
            <label htmlFor="degree">Degree Earned: </label>
            <input 
              name="degree"
              type="text"
              id="degree"
              onChange={this.handleEducationChange}
            />
            <label htmlFor="gradStart">Start Date: </label>
            <input 
              name="gradStart"
              type="text"
              id="gradStart"
              onChange={this.handleEducationChange}
            />
            <label htmlFor="gradEnd">End Date: </label>
            <input 
              name="gradEnd"
              type="text"
              id="gradEnd"
              onChange={this.handleEducationChange}
            />
            <button onClick={this.addSchool}>Add School</button>
          </form>
          <form id="work">
            <h3>Work Experience</h3>
            <label htmlFor="company">Company Name: </label>
            <input
              name="company"
              type="text"
              id="company"
              onChange={this.handleWorkChange}
            />
            <label htmlFor="position">Position Title: </label>
            <input
              name="position"
              type="text"
              id="position"
              onChange={this.handleWorkChange}
            />
            <label htmlFor="description">Job Description: </label>
            <input
              name="description"
              type="text"
              id="description"
              onChange={this.handleWorkChange}
            />
            <label htmlFor="jobStart">Start Date: </label>
            <input
              name="jobStart"
              type="text"
              id="jobStart"
              onChange={this.handleWorkChange}
            />
            <label htmlFor="jobEnd">End Date: </label>
            <input
              name="jobEnd"
              type="text"
              id="jobEnd"
              onChange={this.handleWorkChange}
            />
            <button onClick={this.addJob}>Add Job</button>
          </form>

          <GeneralInfo info={info}/>
          <EducationContainer edus={edus} onDelete={this.deleteSchool}/>
          <WorkInfo jobs={jobs}/>
        </div>
      );
    }
  }

  export default WholeForm;