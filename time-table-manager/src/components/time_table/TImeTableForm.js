import React, { useState } from 'react'

//import api base url
import { apiBaseUrl } from '../../config/api-base-url';

const TimeTableForm = () => {

    //preparing states
    const [moduleName, setModuleName] = useState('');
    const [startAt, setStartAt] = useState('06:00');
    const [endAt, setEndAt] = useState('22:00');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [ successMessage, setSuccessMessage ] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addModule();

        //refresh setters
        const setters = [setModuleName, setStartAt, setEndAt, setDayOfWeek];
        setters.map(setter => setter(''));
    }

    //send newModule to api interacting with database
    const addModule = () => {

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                module_name: moduleName,
                start_at: startAt,
                end_at: endAt,
                day_of_week: dayOfWeek,
                user_id: localStorage.getItem('user_id')
            })
        };

        fetch(`${apiBaseUrl}/api/time-table-modules`, options)
            .then(res => res.json())
            .then(results => {

                console.log(results);

                if (results.success) {
                    setSuccessMessage(results.message);
                } else {
                    setErrorMessage(results.message);
                }

            });

    }

    return (
        <div className="table-form-main">
            <div className="table-form-wrapper">
                <h2>Add Module</h2>
                <p className="success-message">{successMessage}</p>
                <p className="error-message">{errorMessage}</p>
                <form onSubmit={handleSubmit}>
                    <div className="time-table-input-wrapper">
                        <input
                            className="time-table-input"
                            onChange={(e) => setModuleName(e.target.value)}
                            type="text"
                            name="module-name"
                            placeholder="module name"
                            value={moduleName}
                            required
                        />
                    </div>
                    <div className="time-table-input-wrapper">
                        <div>Start:</div>
                        <input
                            className="time-table-input"
                            onChange={(e) => setStartAt(e.target.value)}
                            type="time"
                            name="start-at"
                            min="06:00:00"
                            max="22:00:00"
                            value={startAt}
                            required
                        />
                    </div>
                    <div className="time-table-input-wrapper">
                        <div>End:</div>
                        <input
                            className="time-table-input"
                            onChange={(e) => setEndAt(e.target.value)}
                            type="time"
                            name="end-at"
                            min="06:00:00"
                            max="23:00:00"
                            value={endAt}
                            required
                        />
                    </div>
                        <div className="time-table-input-wrapper">
                        <select className="time-table-input" onChange={(e) => setDayOfWeek(e.target.value)}　value={dayOfWeek} required>
                        <option hidden>which day?</option>
                        <option value="0">Monday</option>
                        <option value="1">Tuesday</option>
                        <option value="2">Wednesday</option>
                        <option value="3">Thursday</option>
                        <option value="4">Firday</option>
                        <option value="5">Saturday</option>
                        </select>
                    </div>
                    <button className="btn" type="submit">Send</button>
                </form>
            </div>
        </div>

     );
}

export default TimeTableForm;