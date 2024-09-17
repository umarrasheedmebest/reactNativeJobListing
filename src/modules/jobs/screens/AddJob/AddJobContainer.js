import * as React from 'react';
import AddJobScreenComponents from './index';
import AddJobScreenServiceComponent from './index.service';

/** container for AddJobScreen screen view/business logic */
function AddJobScreen(props) {
    return (
        <AddJobScreenServiceComponent {...props}>
            {props => (
                <AddJobScreenComponents
                    {...props}
                />
            )}
        </AddJobScreenServiceComponent>
    );
}

export default AddJobScreen;
