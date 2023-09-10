import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{

            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            // removing the last but can make logic according to index
            state.items.pop()
        },
        clearCart:(state,action)=>{

            state.items.length=0
        }
    }
})

// both syntax can be used
export const cartSliceActions=cartSlice.actions

export const{addItem,removeItem,clearCart}=cartSlice.actions


// exporting reducer as default
export default cartSlice.reducer