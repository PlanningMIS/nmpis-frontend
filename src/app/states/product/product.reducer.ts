import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
export interface ProuductState {
  products: IProduct[];
  error: string | null;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  quantity: number;
}

export interface Rating {
  rate: number;
  count: number;
}


export const initalProductState: ProuductState = {
  products: [],
  error: null,
};

export const ProductReducer = createReducer(
  initalProductState,
  on(ProductActions.loadProductSuccess, (state, { products }) => ({
    ...state,
    products,
    error: null,
  })),
  on(ProductActions.loadProductFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  }))
);
