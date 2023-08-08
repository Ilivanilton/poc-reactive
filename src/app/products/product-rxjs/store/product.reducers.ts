import { createReducer, on } from '@ngrx/store';
import { Product } from '../../product';
import { ProductActions } from './action-types';


export interface ModuloProductsState {
  products: Product[]
}

export const initialModuleProductsState: ModuloProductsState = {
  products:[]
};


export const productsReducer = createReducer(
  initialModuleProductsState,
  on(ProductActions.loadAllProducts, (state, action) => state ),
  on(ProductActions.loadAllProductsSuccess, (state,action) =>
      ({
        ...state,
        products: action.products
      })
  ),
  on(ProductActions.createProduct, (state, action) => state ),
  on(ProductActions.createProductSuccess, (state, { product }) =>
    {
      const newProducts = [...state.products];
      newProducts.push(product);
      return {...state,products:newProducts}
    }
  ),
  on(ProductActions.deleteProduct, (state,{ product, idx }) => {
    let newProducts = [...state.products]
    newProducts.splice(idx,1)
    return {...state, products:newProducts}
  }),
  on(ProductActions.updateProduct, (state, { product }) =>{
    debugger
    const newProduct = state.products.map(p => {
      if(p.id == product.id){
        return {
          ...product,
          quantityInStock: product.quantityInStock ? product.quantityInStock + 1 : 1
        } as Product;
      }
      return p
    });
    return {...state,products:newProduct}
  })
);
