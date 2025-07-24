import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'docusaurus-theme-openapi-docs/lib/redux/store';

export const store = configureStore({
  reducer: rootReducer,
});