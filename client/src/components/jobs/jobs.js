import React, { Component } from 'react';
import Modal from "react-responsive-modal";

// external stylesheet & bootstrap components
import './jobs.css';
// import { Col, Row, Container } from '../../components/Grid';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

class Jobs extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <h2>Employment Opportunities</h2>
        <button onClick={this.onOpenModal}>Post Jobs</button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>Post your job leads here!</h2>
          <form className="form-inline">
            <label className="sr-only" for="inlineFormInput">Copy link to job here</label>
            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder='Copy link to job here'/>

            <label className="sr-only" for="inlineFormInputGroup">Job Description</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon"></div>
              <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Job Description"/>
            </div>
            <label className="sr-only" for="inlineFormInputGroup">Contact Name</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon"></div>
              <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Contact Name" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}
  
  export default Jobs;