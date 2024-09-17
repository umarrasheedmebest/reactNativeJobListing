import React from 'react';
import RootNavigator from '@navigation/RootNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootNavigator />
            </PersistGate>
        </Provider>
    );
};

export default App;