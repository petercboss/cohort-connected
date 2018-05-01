import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './faq.css';
import { Container } from '../../components/Grid';
import FaqShell from '../../components/FaqShell';


class Faq extends Component {
    render() {
        return(
          <Container>
            <FaqShell />
          </Container>
        )
    };
};

export default Faq;

