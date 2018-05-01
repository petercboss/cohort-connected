import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './contact.css';
import { Container } from '../../components/Grid';
import ContactForm from '../../components/ContactForm';


class Contact extends Component {
    render() {
        return(
          <Container>
            <ContactForm />
          </Container>
        )
    };
};

export default Contact;

