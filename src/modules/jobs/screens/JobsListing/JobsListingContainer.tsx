import * as React from 'react';
import JobListingComponents from './index';
import JobListingServiceComponent from './index.service';
import { JobListingScreenProps } from '../../../../types/jobListing';

function JobListingScreen(props: JobListingScreenProps) {
    return (
        <JobListingServiceComponent {...props}>
            {serviceProps => (
                <JobListingComponents {...serviceProps} />
            )}
        </JobListingServiceComponent>
    );
}

export default JobListingScreen;
