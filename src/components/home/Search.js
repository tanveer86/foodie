import React from 'react';
import Axios from 'axios';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            query: null
        }
    }

    inputChange = (inputData) => {
        this.setState({query: inputData.target.value})
    }

    inputSubmit = (submitData) => {
        submitData.preventDefault()
        console.log(this.state.query)
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <form onSubmit={this.inputSubmit}>
                                <div class="form-row align-items-center">
                                    <div class="col-auto my-1">
                                        <div class="custom-control custom-checkbox mr-sm-2">
                                            <input type="text" class="form-control" name="query" value={this.state.query} onChange={this.inputChange} required />
                                        </div>
                                    </div>
                                    <div class="col-auto my-1">
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected>Choose...</option>
                                            <option value="1">City</option>
                                            <option value="2">Resturants</option>
                                            <option value="3">Area</option>
                                        </select>
                                    </div>
                                    <div class="col-auto my-1">
                                        <button type="submit" class="btn btn-primary">Search Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Search;