import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import API from '../../utils/API';

// external stylesheet & bootstrap components
import './jobs.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

class Jobs extends Component {
  state = {
    open: false,
    jobs:[],
    jobLink:'',
    jobTitle:'',
    jobCompany: ''
  };

  componentDidMount(){
    this.getJobs();
  }

  getJobs = ()=>{
    API.getJobs()
       .then(res => this.setState({jobs: res.data}))
       .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  //on form submission 
  handleJobFormSubmit = event =>{
    event.preventDefault();
    const newJob= {
      company: this.state.jobCompany,
      link: this.state.jobLink,
      title: this.state.jobTitle,
    }
    API.createJobs(newJob).then(res => {
      console.log(res.data);})
    .catch(err => console.log(err));
    this.onCloseModal();
    this.getJobs();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      // Header
      <div style={styles}>
        <div className='row'>
          <div className='col-12'>
            <h4 id='jobHeader'>Post and Search Opportunities</h4>
          </div>
          <div className='col-12'>
            <button id='job-button' onClick={this.onOpenModal}><i className='fas fa-briefcase'></i> Post Jobs</button>
          </div>
        </div>
    
        <Modal open={open} onClose={this.onCloseModal} little>
          <h4>Post your job leads here!</h4>
          <form className='form-inline'>
          {/* Job Link */}
            <label className="sr-only">Copy link to job here (required)</label>
            <input type="text"
                  value={this.state.jobLink}
                  name='jobLink'
                  onChange={this.handleInputChange}
                  className="form-control mb-2 mr-sm-2 mb-sm-0"
                  id="inlineFormInput" 
                  placeholder='Copy link to job here' 
                  required/>
            {/* Job Title */}
            <label className="sr-only">Job Title</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon"></div>
              <input type="text"
                    value={this.state.jobTitle}
                    name='jobTitle'
                    onChange={this.handleInputChange}
                    className="form-control" 
                    id="inlineFormInputGroup" 
                    placeholder="Job Title"/>
            </div>
            {/* Company */}
            <label className="sr-only">Company</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon"></div>
              <input type="text"
                    value={this.state.jobCompany}
                    name='jobCompany'
                    onChange={this.handleInputChange}
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Company Name" />
            </div>
            <button type="submit"
                    onClick={this.handleJobFormSubmit}
                    className="btn btn-primary">Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}
  
  export default Jobs;