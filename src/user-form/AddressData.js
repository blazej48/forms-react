import React from 'react';
import {withNamespaces} from "react-i18next";
import {Link} from "react-router-dom";

function addressData({t}) {
    return (
        <div>
            <div>
                {t('user_form.steps.address')}
            </div>
            <Link to='/user-form/personal'>
                {t('actions.back')}
            </Link>
            <Link to='/user-form/details'>
                {t('actions.next')}
            </Link>
        </div>
    );
}

export default withNamespaces()(addressData)
