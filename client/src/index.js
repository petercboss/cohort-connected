import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Demo from './containers/demo'

// import { card as cardStyle, hr as hrStyle } from './components/userCard/styles';

ReactDOM.render(
    <div>
        <Demo />
        {/* <App /> */}
    </div>,
    document.getElementById('root')
) 
registerServiceWorker();
