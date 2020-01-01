import React from 'react';
import Search from './Search';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Search For The Best Restaurants Near You</h1>
                            <Search />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;