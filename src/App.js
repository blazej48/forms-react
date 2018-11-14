import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import UserForm from "./UserForm";
import UserDetails from "./UserDetails";
import {withNamespaces} from "react-i18next";

class App extends Component {
    render() {
        const {t, i18n} = this.props;

        return (
            <div>
                <div className="language-bar">
                    <button className="btn" onClick={() => i18n.changeLanguage('pl')}>pl</button>
                    <button className="btn" onClick={() => i18n.changeLanguage('en')}>en</button>
                </div>
                <BrowserRouter>
                    <div>
                        <ul className="router-bar">
                            <li>
                                <Link to="/user-form">{t('routing.user_form')}</Link>
                            </li>
                            <li>
                                <Link to="/user-details">{t('routing.user_details')}</Link>
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

export default withNamespaces('translation')(App);