import { createSlice } from "@reduxjs/toolkit";
//state
// const initialstate=[];
// //reducer is a function which mutate state//pure function:doesnt change outside data
// const cartSlice=createSlice({
//     name:'cart',
//     initialState: [],
//     reducers:{
//        add(state,action){
//      state.push(action.payload);
//     //...directly mutate
// },
// remove(state,action){
// return state.filter((item)=>item.id!=action.payload);
// }
//      }
// });
//     export const {add,remove} =cartSlice.actions;


const initialState = {
    cart: [],
    
    // items: productData,
    totalQuantity: 0,
    totalPrice: 0,
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
       
        let find = state.cart.findIndex((item) => item.id === action.payload.id);
        if (find >= 0) {
          state.cart[find].cartQuantity += 1;

        //   state.cart[find] = {
        //     ...state.cart[find],
        //     cartQuantity: state.cart[find].cartQuantity + 1,
        //   };
        } else {
            const tempProduct = {...action.payload,cartQuantity:1};
          state.cart.push(tempProduct);
        }
      },
  
      getCartTotal: (state) => {
        let { totalQuantity, totalPrice } = state.cart.reduce(
          (cartTotal, cartItem) => {
            // console.log("carttotal", cartTotal);
            console.log("cartitem", cartItem);
            const { price, cartQuantity } = cartItem;
            console.log(price, cartQuantity);
            const itemTotal = price * cartQuantity;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += cartQuantity;
            return cartTotal;
          },
          {
            totalPrice: 0,
            totalQuantity: 0,
          }
        );
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
      },
  
      removeItem: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      },
      increaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, cartQuantity: item.cartQuantity+ 1 };
          }
          return item;
        });



      },
      decreaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, cartQuantity: item.cartQuantity - 1 };
          }
          return item;
        });


        
      },
    },
  });
  
  export const {
    addToCart,
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = cartSlice.actions;
  
    export default cartSlice.reducer;