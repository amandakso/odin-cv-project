import React, { Component } from 'react';
import EducationInfo from './Education';
import GeneralInfo from "./General";
import uniqid from "uniqid";

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
      };
  
      this.handleInfoChange = this.handleInfoChange.bind(this);
      this.handleEducationChange = this.handleEducationChange.bind(this);
      this.addSchool = this.addSchool.bind(this);
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
  
    render() {
      const { info, edu, edus } = this.state;
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
          <GeneralInfo info={info}/>
          <EducationInfo edus={edus}/>
        </div>
      );
    }
  }

  export default WholeForm;