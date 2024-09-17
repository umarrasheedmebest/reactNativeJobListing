import { selectJobs } from "@store/slices/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { addJob, editJob, setCurrentJob } from '@store/slices/jobSlice';

/** business logic for JobListing screen */
const JobListingServiceComponent = ({
    children,
    navigation
}) => {
    const dispatch = useDispatch();
    const navigateToAddJobScreen = () => navigation.navigate('AddJob');


    const setCurrentJobAndNavigate = (job) => {
        console.log('job', job);
        navigation.navigate('AddJob', { job })
    }
    const jobs = useSelector(selectJobs);
    console.log('jobs', jobs);



    return children({
        navigateToAddJobScreen,
        setCurrentJobAndNavigate,
        jobs
    });
}

export default JobListingServiceComponent;
