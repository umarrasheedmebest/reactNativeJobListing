import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import jobReducer from './slices/jobSlice';

// Redux Persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, jobReducer);

export const store = configureStore({
    reducer: {
        job: persistedReducer,
    },
});

export const persistor = persistStore(store);
