import * as React from 'react';
import AddJobScreenComponents from './index';
import AddJobScreenServiceComponent from './index.service';
import { AddJobContainerProps } from '../../../../types/addJob';

function AddJobScreen(props: AddJobContainerProps) {
    return (
        <AddJobScreenServiceComponent {...props}>
            {serviceProps => <AddJobScreenComponents {...serviceProps} />}
        </AddJobScreenServiceComponent>
    );
}

export default AddJobScreen;
