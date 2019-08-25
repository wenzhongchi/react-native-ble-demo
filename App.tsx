import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import ReactotronConfig from './src/config/reactotron';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './src/screens/Home';
import AppStart from './src/app/AppStart';

if (__DEV__) {
    new ReactotronConfig({ enableLog: true });
}

const AppInit = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppStart>
                <Home />
            </AppStart>
        </PersistGate>
    </Provider>
);

export default AppInit;
