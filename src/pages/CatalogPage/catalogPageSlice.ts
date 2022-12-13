import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductResponse } from '../../models/ProductResponse';

interface CatalogPageState {
  products: ProductResponse[];
}

const initialState: CatalogPageState = {
  products: [],
};

interface LoadProductsPayload {
  products: ProductResponse[];
}

export const catalogPageSlice = createSlice({
  name: 'catalogPage',
  initialState: initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<LoadProductsPayload>) => {
      state.products = action.payload.products;
    },
  },
});

export const { loadProducts } = catalogPageSlice.actions;

export const catalogPageReducer = catalogPageSlice.reducer;
