import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  image?: string;
  name: string;
  price: number;
}

interface ProductState {
  products: Product[];
}

const image = [
  'https://cdn.pixabay.com/photo/2023/10/26/22/50/guitar-8343666_1280.png',
  'https://cdn.pixabay.com/photo/2021/11/28/15/32/clock-6830535_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/12/08/02/12/microphone-8436595_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/11/02/09/09/healthy-8360076_1280.jpg',
]

const defaultProducts: Product[] = Array.from({ length: 10 }, (_, index) => ({
  id: `${index+1}`, 
  image: image[index % 4],
  name: `Product ${index + 1}`,
  price: 90
}));

const initialState: ProductState = {
  products: defaultProducts,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{
      name: string;
      price: number;
    }>) => {
      state.products.push({
        id: `${state.products.length+1}`, 
        ...action.payload,
        image: image[state.products.length % 4], 
      });
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    editProduct: (state, action: PayloadAction<{id: string, name: string, price: number}>) => {
      const oldProduct  = state.products.filter((product) => product.id === action.payload.id && product);
      state.products = state.products.filter((product) => product.id !== action.payload.id && product);
      state.products = [{...(oldProduct[0]), ...action.payload},...state.products];
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
