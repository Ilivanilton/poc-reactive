import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { ModuloProductsState } from './product.reducers';


/**
 * filtra de AppState a propriedade 'module_products', que
 * é o nó princioal deste modulo, no json root. E retorna
 * um ModuloProductsState
 */
//export const ModuloProductsState = (state: AppState) => state['module_products']
export const selectModuleProducts = createFeatureSelector<ModuloProductsState>('module_products')

/**
 * Uma especie de filtro:
 * entra Products > Products > []
 * sai []
 *
// export const selectAllProducts = createSelector(
//   state => state['modulo_products'],
//   state => state['products']
// );
 */
export const selectAllProducts = createSelector(
  selectModuleProducts,
  state => state.products
);

// export const selectIdPosts = createSelector(
//   selectAllProducts,
//   (products,props) => ({...(products.filter(p => p.id == props.id)[0])})
// );
