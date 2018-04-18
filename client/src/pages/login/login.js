import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import LinkedinSDK from 'react-linkedin-sdk'
import './login.css';

const responseLinkedin = response => {
    console.log(response.id)
    console.log(response.firstName)
    console.log(response.lastName)
    console.log(response.headline)
    console.log(response.location.name)
    console.log(response.pictureUrls.values[0])
}



class Login extends Component {
    render() {
        return (
            <div className='Login'>
            <h1>Login</h1>
                <LinkedinSDK
                    clientId='78xlkz34c94sm1'
                    callBack={responseLinkedin}
                    fields=':(id,firstName,lastName,headline,location,picture-urls::(original))'
                    className={'className'}
                    textButton={'Login with Linkedin'}
                    buttonType={'button'}
                    //icon={<Icon />}
                />
            </div>
        );
    }
}

export default Login;