import { catalogPageReducer } from '../pages/CatalogPage/catalogPageSlice';
import { configureStore } from '@reduxjs/toolkit';
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
  reducer: {
    testPage: testPageReducer,
    catalogPage: catalogPageReducer,
    //cartPage: cartPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
