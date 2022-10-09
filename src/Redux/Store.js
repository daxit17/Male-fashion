import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './Reducer/RootReducer'
import thunk from 'redux-thunk'
import { rootSaga } from './Saga/Root_saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, thunk];

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart', 'products']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
