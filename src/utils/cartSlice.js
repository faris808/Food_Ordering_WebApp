import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            //I can write my own logic on which item i want to remove we can take index in form of action
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[];
        },
    },
});
export const{addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;



//for understanding point of view
/*cartSlice={
    actions:{
        addItem,
        removeItem,
        clearCart
    },
    reducer:reducers,
}*/