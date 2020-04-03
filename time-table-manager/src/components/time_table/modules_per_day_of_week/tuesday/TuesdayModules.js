import React, { useContext } from 'react';

//import context
import { TimeTableContext } from '../../../../context/TimeTableContext';

//import component
import TuesdayModule from '../tuesday/TuesdayModule';

const TuesdayModules = () => {
     //get tuesday modules from context
     const { tuesdayModules, deleteModule } = useContext(TimeTableContext);

    return (
        <React.Fragment>
            { tuesdayModules.map(module => <TuesdayModule key={module.id} module={module} deleteModule={deleteModule}/> ) }
        </React.Fragment>
    );
}

export default TuesdayModules;