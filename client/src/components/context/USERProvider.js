import React, {Component} from 'react';
import USERContext from './USERContext';



class USERProvider extends Component {
        render() {
            // const { user: user} = this.props
            return(
                <div>
                <USERContext.Provider value={{user: this.props}}>
                    {this.props.children}
                </USERContext.Provider>
                </div>
            );
        }

}

export default USERProvider;