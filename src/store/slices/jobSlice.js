import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: [],
    currentJob: null,
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        editJob: (state, action) => {
            const index = state.jobs.findIndex(job => job.id === action.payload.id);
            if (index !== -1) {
                state.jobs[index] = action.payload;
            }
        },
        setCurrentJob: (state, action) => {
            state.currentJob = action.payload;
        },
    },
});

// Selectors
export const selectJobs = state => state.job.jobs;

export const { addJob, editJob, setCurrentJob } = jobSlice.actions;
export default jobSlice.reducer;
