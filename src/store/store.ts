import { AsyncStorage } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import { seamlessImmutableReconciler } from 'redux-persist-seamless-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import settingReducer from './setting/settingReducer';

const migrations = {
    0: (state: any) => {
        return {
            ...state,
        };
    },
};

export const persistConfig = {
    key: 'illuminate',
    whitelist: ['setting'],
    storage: AsyncStorage,
    debug: true,
    stateReconciler: seamlessImmutableReconciler,
    migrate: createMigrate(migrations, { debug: true }),
};

export const rootReducer = combineReducers({
    setting: settingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = applyMiddleware(thunk);

const composedEnhancer = composeWithDevTools(enhancer);

export const configureStore = () => {
    return createStore(persistedReducer, {}, composedEnhancer);
};

export const store = configureStore();

export const persistor = persistStore(store);
