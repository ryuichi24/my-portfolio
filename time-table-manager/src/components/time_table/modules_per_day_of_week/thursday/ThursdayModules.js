import React, { useContext } from 'react';

//import context
import { TimeTableContext } from '../../../../context/TimeTableContext';

//import component
import ThursdayModule from '../thursday/ThursdayModule';

const ThursdayModules = () => {
     //get thursday modules from context
     const { thursdayModules, deleteModule } = useContext(TimeTableContext);

    return (
        <React.Fragment>
            { thursdayModules.map(module => <ThursdayModule key={module.id} module={module} deleteModule={deleteModule}/> ) }
        </React.Fragment>
    );
}

export default ThursdayModules;