import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {UserForm} from "./UserForm";
import {UserDetails} from "./UserDetails";

class App extends Component {
    render() {
        return (
            <div>
                <div className="language-bar">
                    <button className="btn" >pl</button>
                    <button className="btn" >en</button>
                </div>
                <BrowserRouter>
                    <div>
                        <ul className="router-bar">
                            <li>
                                <Link to="/user-form">user form</Link>
                            </li>
                            <li>
                                <Link to="/user-details">user details</Link>
                            </li>
                        </ul>
                        <div className="container">
                            <Route exact path="/user-form" component={UserForm}/>
                            <Route path="/user-details" component={UserDetails}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;