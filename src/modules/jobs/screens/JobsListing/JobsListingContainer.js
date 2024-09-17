import * as React from 'react';
import JobListingComponents from './index';
import JobListingServiceComponent from './index.service';

/** container for JobListing screen view/business logic */
function JobListingScreen(props) {
    return (
        <JobListingServiceComponent {...props}>
            {props => (
                <JobListingComponents
                    {...props}
                />
            )}
        </JobListingServiceComponent>
    );
}

export default JobListingScreen;
