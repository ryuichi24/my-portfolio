import React, { createContext, useState } from "react";

//import base url for api
import { apiBaseUrl } from '../config/api-base-url';

export const TimeTableContext = createContext();

const TimeTableContextProvider = (props) => {

    //preparing states
    const [mondayModules, setMondayModules] = useState([]);
    const [tuesdayModules, setTuesdayModules] = useState([]);
    const [wednesdayModules, setWednesdayModules] = useState([]);
    const [thursdayModules, setThursdayModules] = useState([]);
    const [fridayModules, setFridayModules] = useState([]);
    const [saturdayModules, setSaturdayModules] = useState([]);

        const allSetters = [
            setMondayModules,
            setTuesdayModules,
            setWednesdayModules,
            setThursdayModules,
            setFridayModules,
            setSaturdayModules
        ];


    //send module Id to api to delete the module
    const deleteModule = async (module_id, user_id) => {

        const options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
            }
        };

        fetch(`${apiBaseUrl}/api/time-table-modules/${module_id}`, options)
            .then(res => res.json())
            .then(results => {
                if (!results.success) {
                    console.log(results.message)
                } else {
                        //refresh setters
                    allSetters.forEach(setter => setter([]));

                    setModulesPerUser(user_id);
                }
            })

    }

    //send user id to api to fetch all modules of the user
    const setModulesPerUser = (user_id) => {

        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        };

    fetch(`${apiBaseUrl}/api/time-table-modules/${user_id}`, options)
            .then(res => res.json())
            .then(results => {
                console.log(results)

                 //values of day_of_week starts from 0 to 5 such as Monday = 0, Tuesday = 1 and wednesday = 2
                allSetters.forEach((setter, index) => (setter(results.modules.filter(module => module.day_of_week === index))));
            })
    }

    return (
        <TimeTableContext.Provider value={{
            mondayModules,
            tuesdayModules,
            wednesdayModules,
            thursdayModules,
            fridayModules,
            saturdayModules,
            deleteModule,
            setModulesPerUser
        }}>
            { props.children }
        </TimeTableContext.Provider>
    );
}

export default TimeTableContextProvider;