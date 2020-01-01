import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import Homepage from './home/Homepage';

function App(){
    return(
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>
    )
}

export default App;