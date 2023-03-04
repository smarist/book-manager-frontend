import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reduxReducer from './reducers/combineReducer';

const initState = {};
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['app'], // only navigation will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, reduxReducer);
const store = createStore(reduxReducer, initState, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
