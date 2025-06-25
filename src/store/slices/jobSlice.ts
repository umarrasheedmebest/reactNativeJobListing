import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Job {
    id: string;
    title: string;
    [key: string]: any; // You can replace this with exact fields like `description`, `location`, etc.
}

interface JobState {
    jobs: Job[];
    currentJob: Job | null;
}

const initialState: JobState = {
    jobs: [],
    currentJob: null,
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        addJob: (state, action: PayloadAction<Job>) => {
            state.jobs.push(action.payload);
        },
        editJob: (state, action: PayloadAction<Job>) => {
            const index = state.jobs.findIndex(job => job.id === action.payload.id);
            if (index !== -1) {
                state.jobs[index] = action.payload;
            }
        },
        setCurrentJob: (state, action: PayloadAction<Job | null>) => {
            state.currentJob = action.payload;
        },
    },
});

// Selectors
export const selectJobs = (state: { job: JobState }) => state.job.jobs;

export const { addJob, editJob, setCurrentJob } = jobSlice.actions;
export default jobSlice.reducer;
