import {Job} from '../store/slices/jobSlice';

export type JobListItemProps = {
  item: Job;
  onPress: (job: Job) => void;
};
