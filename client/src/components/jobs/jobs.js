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
       .then(res => this.setState({ jobs: res.data }))
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
  handleJobFormSubmit = event => {
    event.preventDefault();
    let newJob= {
      company: this.state.jobCompany,
      link: this.state.jobLink,
      title: this.state.jobTitle,
    };
    const splitLink = newJob.link.split('//');
    newJob.link = `https://${splitLink[1]}`;
    API.createJobs(newJob).then(res => {
      console.log(res.data);})
    .catch(err => console.log(err));
    this.onCloseModal();
    this.getJobs();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    this.props.reloadJobs();
  };

  render() {
    const { open } = this.state;
    return (
      // Header
      <div style={styles}>
        <div className='row job-headerRow'>
          <div className='col-6'>
            <button className='job-button' onClick={this.onOpenModal}><i className='jobHead-icons fas fa-briefcase'></i>Post Jobs</button>
          </div>
          <div className='col-6'>
            <a className='resource-button' href='https://www.guru.com/d/jobs/' target='_blank' rel='noopener noreferrer'>
              <div>Find Freelance Work<i className='jobHead-icons fas fa-external-link-alt'></i></div>
            </a>
            <a className='resource-button' href='https://www.glassdoor.com/Reviews/index.htm' target='_blank' rel='noopener noreferrer'>
              <div>Research Employers<i className='jobHead-icons fas fa-external-link-alt'></i></div>
            </a>
          </div>
        </div>
        <Modal open={open} onClose={this.onCloseModal} className='modal' little>
          <h2 className='modal-header'>Share Job Opportunity</h2>
          <form>
            <div className='form-group'>
              <label className='modal-label'>Link to Job Listing:</label>
              <input type='text' className='form-control' name='jobLink' onChange={this.handleInputChange} placeholder='https://cohortconnected.herokuapp.com/'/>
            </div>
            <div className='form-group'>
              <label className='modal-label'>Title:</label>
              <input type='text' className='form-control' name='jobTitle' onChange={this.handleInputChange} placeholder='Full Stack Developer'/>
            </div>
            <div className='form-group'>
              <label className='modal-label'>Company:</label>
              <input type='text' className='form-control' name='jobCompany' onChange={this.handleInputChange} placeholder='Northwestern University'></input>
            </div>
            <button onClick={this.handleJobFormSubmit} type='submit' className='btn btn-light submit-question'>Submit</button>
            <div className='clearfix' />
          </form>
        </Modal>
      </div>
    );
  }
}
  
  export default Jobs;