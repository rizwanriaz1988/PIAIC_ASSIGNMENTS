import { PayloadAction, createSlice } from '@reduxjs/toolkit';




const counterSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
        basket:  [{}]
    },
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            // Add the product to the cart array
            state.basket.push(action.payload)
            // console.log(action);
        },
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },

        reset: (state) => {
            state.value = 0
        }

    }
        // console.log("🚀 ~ action:", action)
})


export const { increment, decrement, reset, addToCart } = counterSlice.actions
export default counterSlice.reducer