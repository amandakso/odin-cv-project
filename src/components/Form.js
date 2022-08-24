import React, { Component } from 'react';
import EducationContainer from './EducationContainer';
import GeneralInfo from './General';
import WorkContainer from './WorkContainer';
import PreviewForm from './Preview';
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
        eduSearch: '',
        job: {
          company: '',
          position: '',
          description: '',
          jobStart: '',
          jobEnd: '',
          id: uniqid(),
        },
        jobs: [],
        jobSearch: '',
      };
  
      this.handleInfoChange = this.handleInfoChange.bind(this);
      this.handleEducationChange = this.handleEducationChange.bind(this);
      this.addSchool = this.addSchool.bind(this);
      this.deleteSchool = this.deleteSchool.bind(this);
      this.editSchool = this.editSchool.bind(this);
      this.updateSchool = this.updateSchool.bind(this);
      this.handleWorkChange = this.handleWorkChange.bind(this);
      this.addJob = this.addJob.bind(this);
      this.deleteJob = this.deleteJob.bind(this);
      this.editJob = this.editJob.bind(this);
      this.updateJob = this.updateJob.bind(this);
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
        const newEducation = prevState.edus.filter((edu) => edu.id !== id)
        return {...prevState, edus: [...newEducation]}
      })
    }

    editSchool = (id) => {
        console.log(id);
        let statusCopy = this.state;
        let search;
        for (let i = 0; i < statusCopy.edus.length; i++) {
          if (id === statusCopy.edus[i].id) {
            search = statusCopy.edus[i];
          } 
        }
        console.log(search.id);
        this.setState({
          edu: {
              school: search.school,
              degree: search.degree,
              gradStart: search.gradStart,
              gradEnd: search.gradEnd,
              id: uniqid(),
          },
          eduSearch: search.id,
        });
        let school = document.getElementById('school');
        let degree = document.getElementById('degree');
        let gradStart = document.getElementById('gradStart');
        let gradEnd = document.getElementById('gradEnd');
        
        school.value = search.school;
        degree.value = search.degree;
        gradStart.value = search.gradStart;
        gradEnd.value = search.gradEnd;
        
    }

    updateSchool = (e) => {
      e.preventDefault();
      let statusCopy = this.state;
      let old = statusCopy.eduSearch;
      let educations = statusCopy.edus;
      let updated = educations.map((edu) => {
        if (edu.id === old) {
          return {...edu,
            school: statusCopy.edu.school,
            degree: statusCopy.edu.degree,
            gradStart: statusCopy.edu.gradStart,
            gradEnd: statusCopy.edu.gradEnd,
            id: statusCopy.eduSearch,
          };
        }
        return edu;
      })
    
      this.setState({edus: updated})
    
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

    deleteJob = (id) => {
      this.setState((prevState) => {
        const newJob = prevState.jobs.filter((job) => job.id !== id)
        return {...prevState, jobs: [...newJob]}
      })
    }


    editJob = (id) => {
      console.log(id);
      let statusCopy = this.state;
      let search;
      for (let i = 0; i < statusCopy.jobs.length; i++) {
        if (id === statusCopy.jobs[i].id) {
          search = statusCopy.jobs[i];
        } 
      }
      console.log(search.id);
      this.setState({
        job: {
            company: search.company,
            position: search.position,
            description: search.description,
            jobStart: search.jobEnd,
            id: uniqid(),
        },
        jobSearch: search.id,
      });
      let company = document.getElementById('company');
      let position = document.getElementById('position');
      let description = document.getElementById('description');
      let jobStart = document.getElementById('jobStart');
      let jobEnd = document.getElementById('jobEnd');
      
      company.value = search.company;
      position.value = search.position;
      description.value = search.description;
      jobStart.value = search.jobStart;
      jobEnd.value = search.jobEnd;
      
  }

  updateJob = (e) => {
    e.preventDefault();
    let statusCopy = this.state;
    let old = statusCopy.jobSearch;
    let jobs = statusCopy.jobs;
    let updated = jobs.map((job) => {
      if (job.id === old) {
        return {...job,
          company: statusCopy.job.company,
          position: statusCopy.job.position,
          description: statusCopy.job.description,
          jobStart: statusCopy.job.jobStart,
          jobEnd: statusCopy.job.jobEnd,
          id: statusCopy.jobSearch,
        };
      }
      return job;
    })
  
    this.setState({jobs: updated})
  
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
        <GeneralInfo info={info}/>
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
            <button onClick={this.addSchool}>Add</button>
            <button onClick={this.updateSchool}>Update</button>
          </form>
          <EducationContainer edus={edus} onDelete={this.deleteSchool} onEdit ={this.editSchool}/>
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
            <button onClick={this.addJob}>Add</button>
            <button onClick={this.updateJob}>Update</button>
          </form>
          <WorkContainer jobs={jobs} onDelete={this.deleteJob} onEdit={this.editJob}/>
          <PreviewForm info ={info} edus={edus} jobs={jobs}/>
        </div>
      );
    }
}


  export default WholeForm;