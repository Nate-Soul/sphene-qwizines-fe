import { configureStore } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,
    PAUSE,
    PERSIST,
    PURGE,
    FLUSH,
    REGISTER,
    REHYDRATE
} from "redux-persist";
import storage from "./customPersistStorage";

import cartReducer from "./cartReducer";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: { 
        cart: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export let persistor = persistStore(store)