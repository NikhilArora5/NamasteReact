import { createSlice ,current} from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
           
            console.log("------------STATE SIMPLE",state)
            console.log("---------CUREENT---STATE ",current(state))
            // RTK
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            // removing the last but can make logic according to index
            state.items.pop()
        },

        // for Ex: original state ={items:["pizza"]}
        clearCart:(state,action)=>{           

            return {items:[]}

        }
    }
})

// both syntax can be used
export const cartSliceActions=cartSlice.actions

export const{addItem,removeItem,clearCart}=cartSlice.actions


// exporting reducer as default
export default cartSlice.reducer


