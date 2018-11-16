import React from 'react';
import {withNamespaces} from "react-i18next";
import {Route} from "react-router-dom";
import PersonalData from "./PersonalData";
import AddressData from "./AddressData";
import DetailsData from "./DetailsData";

function userForm() {
    return (
        <div>
            <Route path="/user-form/personal" component={PersonalData}/>
            <Route exact path="/user-form/address" component={AddressData}/>
            <Route exact path="/user-form/details" component={DetailsData}/>
        </div>
    );
}

export default withNamespaces()(userForm)
