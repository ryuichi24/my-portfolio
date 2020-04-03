import React from 'react';


//import component
import MondayModules from './modules_per_day_of_week/monday/MondayModules';
import TuesdayModules from './modules_per_day_of_week/tuesday/TuesdayModules';
import WednesdayModules from './modules_per_day_of_week/wednesday/WednesdayModules';
import ThursdayModules from './modules_per_day_of_week/thursday/ThursdayModules';
import FridayModules from './modules_per_day_of_week/friday/FridayModules';
import SaturdayModules from './modules_per_day_of_week/saturday/SaturdayModules';
import UserFilter from './UserFilter';

//import stylesheet
import './time-table.css';


const TimeTable = () => {

    return (
        <div>
            <div>
                <h1 className="greeting">Hello {localStorage.getItem('user_name')} !</h1>
                <div className="user-filter">
                    <UserFilter/>
                </div>
                <div className="time-table">
                    <div className="day">
                        <h3>Mon</h3>
                        <MondayModules/>
                    </div>
                    <div className="day">
                        <h3>Tue</h3>
                        <TuesdayModules/>
                    </div>
                    <div className="day">
                        <h3>Wed</h3>
                        <WednesdayModules/>
                    </div>
                    <div className="day">
                        <h3>Thu</h3>
                        <ThursdayModules/>
                    </div>
                    <div className="day">
                        <h3>Fri</h3>
                        <FridayModules/>
                    </div>
                    <div className="day">
                        <h3>Sat</h3>
                        <SaturdayModules/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeTable;