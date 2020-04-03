import React from 'react';

import EditAccount from '../account/EditAccount';
import DeleteAccount from '../account/DeleteAccount';

import './account-setting.css';

const AccountSetting = () => {
    return (
        <div className="account-setting-wrapper">
            <div className="account-setting-container">
                <div className="edit-account-wrapper">
                    <EditAccount/>
                </div>
                <div className="delete-account-wrapper">
                    <DeleteAccount/>
                </div>
            </div>
        </div>
    );
}

export default AccountSetting;