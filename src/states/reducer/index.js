import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    name: 'incdec',
    initialState:{
        amount:10,
        number:100
    } ,
    //the following functions will update the initial state
    reducers:{
        inc: (state, action)=>{
            state.amount += 1; 
        },
        dec : (state, action)=>{
            state.amount -= 1;
        },
        mul: (state, action)=>{
            state.number *=10;
        },
        div: (state, action)=>{
            state.number /=10;
        }
    }
})

export const {inc, dec, mul, div} = incdecSlice.actions;
export default incdecSlice.reducer; 