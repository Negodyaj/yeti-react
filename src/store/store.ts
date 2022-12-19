import { catalogPageReducer } from '../pages/CatalogPage/catalogPageSlice';
import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './currentUser';
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
  reducer: {
    testPage: testPageReducer,
    catalogPage: catalogPageReducer,
    currentUser: currentUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
