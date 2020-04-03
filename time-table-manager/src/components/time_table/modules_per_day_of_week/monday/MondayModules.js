import React, { useContext } from 'react';

//import context
import { TimeTableContext } from '../../../../context/TimeTableContext';

//import component
import MondayModule from '../monday/MondayModule';

const MondayModules = () => {
     //get monday modules from context
     const { mondayModules, deleteModule } = useContext(TimeTableContext);

    return (
        <React.Fragment>
            { mondayModules.map(module => <MondayModule key={module.id} module={module} deleteModule={deleteModule}/> ) }
        </React.Fragment>
    );
}

export default MondayModules;