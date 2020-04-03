import React, { useContext } from 'react';

//import context
import { TimeTableContext } from '../../../../context/TimeTableContext';

//import component
import FridayModule from '../friday/FridayModule';

const FridayModules = () => {
     //get friday modules from context
     const { fridayModules, deleteModule } = useContext(TimeTableContext);

    return (
        <React.Fragment>
            { fridayModules.map(module => <FridayModule key={module.id} module={module} deleteModule={deleteModule}/> ) }
        </React.Fragment>
    );
}

export default FridayModules;