import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductListItemProps} from '../../components/common/ProductListItem';
import type {RootState} from '../store';
interface ProductsListProps {
  listData: Array<ProductListItemProps>;
  addedItems: Array<string>;
  total: number;
}

const initialState: ProductsListProps = {
  listData: [],
  addedItems: [],
  total: 0,
};

export const ListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsListData: (
      state,
      action: PayloadAction<Array<ProductListItemProps>>,
    ) => {
      state.listData = action.payload;
    },
    addItemToCart: (state, action: PayloadAction<string>) => {
      state.addedItems.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.addedItems = state.addedItems.filter(
        item => item !== action.payload,
      );
    },
    addToTotal: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
  },
});

export const {
  setProductsListData,
  addItemToCart,
  removeItemFromCart,
  addToTotal,
} = ListSlice.actions;

export const selectProductsListData = (state: RootState) =>
  state.products.listData;
export const selectAddedItems = (state: RootState) => state.products.addedItems;
export const selectTotalPrice = (state: RootState) => state.products.total;

export default ListSlice.reducer;
