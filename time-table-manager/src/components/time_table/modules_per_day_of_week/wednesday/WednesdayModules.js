import React, { useContext } from 'react';

//import context
import { TimeTableContext } from '../../../../context/TimeTableContext';

//import component
import WednesdayModule from '../wednesday/WednesdayModule';

const WednesdayModules = () => {
     //get wednesday modules from context
     const { wednesdayModules, deleteModule } = useContext(TimeTableContext);

    return (
        <React.Fragment>
            { wednesdayModules.map(module => <WednesdayModule key={module.id} module={module} deleteModule={deleteModule}/> ) }
        </React.Fragment>
    );
}

export default WednesdayModules;