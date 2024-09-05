import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts") ? JSON.parse(localStorage.getItem("selectedProducts")) : [],
  selectedProductsID: localStorage.getItem("selectedProductsID")? JSON.parse(localStorage.getItem("selectedProductsID")) :[],
};




export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    
    Add: (state, action) => {
      const productWithQuantity = { ...action.payload, qontity: 1 };
      state.selectedProducts.push(productWithQuantity);
      state.selectedProductsID.push(action.payload.id);

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },

    deleteProdact: (state, action) => {
      const filter = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      // delet prodact index
      const filter_2 = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.selectedProducts = filter;
      state.selectedProductsID = filter_2;

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },

    incrementByAmount: (state, action) => {
      const increes = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increes.qontity += 1;

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    deecreasQuontity: (state, action) => {
      const increes = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increes.qontity -= 1;
      // delet prodact
      if (increes.qontity === 0) {
        const filter = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        // delet prodact index
        const filter_2 = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.selectedProducts = filter;
        state.selectedProductsID = filter_2;
        // تحديث الدات بيز
        localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

     

  },
});

export const {
  Add,
  deleteProdact,
  incrementByAmount,
  deecreasQuontity,
  darkmood,
} = counterSlice.actions;

export default counterSlice.reducer;

// decrement: (state) => {
//   state.value -= 1
// },
// incrementByAmount: (state, action) => {
//   state.value += action.payload
// },
