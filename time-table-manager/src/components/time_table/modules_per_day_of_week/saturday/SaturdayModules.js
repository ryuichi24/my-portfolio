import React, { useContext } from 'react';

//import context
import { TimeTableContext } from '../../../../context/TimeTableContext';

//import component
import SaturdayModule from '../saturday/SaturdayModule';

const SaturdayModules = () => {
     //get monday modules from context
     const { saturdayModules, deleteModule, } = useContext(TimeTableContext);

    return (
        <React.Fragment>
            { saturdayModules.map(module => <SaturdayModule key={module.id} module={module} deleteModule={deleteModule}/> ) }
        </React.Fragment>
    );
}

export default SaturdayModules;