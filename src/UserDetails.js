import React, {Component} from 'react';
import {withNamespaces} from "react-i18next";

class UserDetails extends Component {
    render() {
        const {t} = this.props;
        return (
            <div>{t('routing.user_form')}</div>
        )
    }
}

export default withNamespaces()(UserDetails)
