import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import phonenumbers from "./reducers/phonenumbers";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    phonenumbers,
  },
  middleware,
});
