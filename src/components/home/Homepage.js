import React from 'react';
import Header from './Header';

class Homepage extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <Header />
            </React.Fragment>
        )
    }
}

export default Homepage;