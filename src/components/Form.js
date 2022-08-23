import React, { Component } from 'react';
import GeneralInfo from "./General";

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
      };
  
      this.handleInfoChange = this.handleInfoChange.bind(this);
    }
  
    handleInfoChange = (e) => {
      let inputName = e.target.name;
      let inputValue = e.target.value;
  
      let statusCopy = this.state;
      statusCopy.info[inputName] = inputValue;
      this.setState(statusCopy)
    }
  
    render() {
      const { info } = this.state;
      return (
        <div>
          <form>
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
        </div>
      );
    }
  }

  export default WholeForm;