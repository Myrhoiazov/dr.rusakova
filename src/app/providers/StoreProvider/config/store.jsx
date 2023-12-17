import {configureStore, combineReducers} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import authReducer from 'redux/Auth/AuthSlice';
import userReducer from 'redux/User/UserSlice';

const authPersistConfig = {
	key: 'root',
	storage,
	version: 1,
	whitelist: ['auth', 'user'],
};

export function createReduxStore() {
	const rootReducers = combineReducers({
		auth: authReducer,
		user: userReducer,
	});

	const persistedReducer = persistReducer(authPersistConfig, rootReducers);

	return configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			}),
	});
}

export const store = createReduxStore();
export const persistor = persistStore(store);
