import { useDispatch, useSelector } from 'react-redux';
import { Job, selectJobs } from '../../../../store/slices/jobSlice';
import { JobListingService } from '../../../../types/jobListing';

const JobListingServiceComponent = ({ children, navigation }: JobListingService) => {
    const dispatch = useDispatch();
    const jobs = useSelector(selectJobs);

    const navigateToAddJobScreen = () => navigation.navigate('AddJob');

    const setCurrentJobAndNavigate = (job: Job) => {
        console.log('job', job);
        navigation.navigate('AddJob', { job });
    };

    return children({
        navigateToAddJobScreen,
        setCurrentJobAndNavigate,
        jobs,
    });
};

export default JobListingServiceComponent;
