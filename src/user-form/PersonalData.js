import React from 'react';
import {withNamespaces} from "react-i18next";
import {Link} from "react-router-dom";

function personalData({t}) {
    return (
        <div>
            <div>
                {t('user_form.steps.personal')}
            </div>
            <Link to='/user-form/address'>
                {t('actions.next')}
            </Link>
        </div>
    );
}

export default withNamespaces()(personalData)
