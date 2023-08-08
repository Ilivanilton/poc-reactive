import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';


export const loadAllProducts = createAction(
  "[Products Resolver] Load All Products"
);

export const loadAllProductsSuccess = createAction(
  '[Load Products Effect] All Products Loaded',
  props<{products: Product[]}>()
);

export const createProduct = createAction(
  '[Product Create] chama effect',
  props<{product: Product}>()
);

export const createProductSuccess = createAction(
  '[Product create] cria no store',
  props<{product: Product}>()
);

export const deleteProduct = createAction(
  '[Product delete] Dell post',
  props<{product: Product, idx: number}>()
);

export const updateProduct = createAction(
  '[Edit Product] Product Update',
  props<{product: Product}>()
);


