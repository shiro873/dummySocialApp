import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

// persist
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER
// } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { rootReducer } from "./reducers";

// persist config
// const persistConfig = {
//     key: 'root',
//     version: 1,
//     Storage: AsyncStorage
// }

// persist root reducer
// const persistorReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        // Redux persist
        // serializableCheck: {
        //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
      }),
  });

  setupListeners(store.dispatch);

  // export const persistor = persistStore(store);

  export default store;