import React from 'react';
import {Link} from "react-router-dom";
import {withNamespaces} from "react-i18next";

function detailsData({t}) {
    return (
        <div>
            <div>
                {t('user_form.steps.details')}
            </div>
            <Link to='/user-form/address'>
                {t('actions.back')}
            </Link>
            <button>
                {t('actions.next')}
            </button>
        </div>
    );
}


export default withNamespaces()(detailsData)
