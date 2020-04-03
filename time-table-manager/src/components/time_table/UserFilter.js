import React, { useState, useContext, useEffect } from 'react';

//import base url for api
import { apiBaseUrl } from '../../config/api-base-url';

//import context
import { TimeTableContext } from '../../context/TimeTableContext';

const UserFilter = () => {

    //get context
    const { setModulesPerUser } = useContext(TimeTableContext);

    //preparing states
    const [ userId, setUserId ] = useState('');
    const [ users, setUsers ] = useState([]);

    //fetch data from api when the component mounts
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        }

        //create asynchronous func within useEffect to avoid directly returning ath
        const fetchData = async () => {
            try{
                const res = await fetch(`${apiBaseUrl}/api/user`, options);
                const results = await res.json();

                if (!results.success) {
                    console.log(results.message);
                } else {
                    setUsers(results.users);
                }

            } catch(e) {
                console.log(e);
            }
        }

        fetchData();

    }, []);

    return (
        <div>
            <select onChange={(e) => {
                setModulesPerUser(e.target.value)
                setUserId(e.target.value)
            }}
                value={userId}>
            <option hidden>Whose time table?</option>
            {users.map(user => <option key={user.id} value={user.id}>{user.user_name}</option>)}
            </select>
        </div>
     );
}

export default UserFilter;