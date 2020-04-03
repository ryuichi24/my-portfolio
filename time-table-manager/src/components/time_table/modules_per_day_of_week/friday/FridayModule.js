import React from 'react';

const FridayModule = ({ module, deleteModule }) => {

    const setDeleteBtnStyle = () => {

        //check if the module is the user's logged in
        const isUsersModule = module.user_id === parseInt(localStorage.getItem('user_id'));

        if(!isUsersModule) {
            return {
                display: 'none'
            }
        }  else {
            return {
                display: 'block'
            }
        }
    }

    return (
        <div className="module-card">
            <div>{module.module_name}</div>
            <div>Start: {module.start_at}</div>
            <div>End: {module.end_at}</div>
            <button className="del-module-btn" onClick={() => deleteModule(module.id, module.user_id)} style={setDeleteBtnStyle()}>delete</button>
        </div>
    );
}

export default FridayModule;