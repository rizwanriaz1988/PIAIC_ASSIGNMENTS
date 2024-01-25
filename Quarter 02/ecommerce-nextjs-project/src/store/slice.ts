import { PayloadAction, createSlice } from '@reduxjs/toolkit';




const counterSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
        basket: [{}]
    },
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            // Check if the product is already in the cart
            const existingItem: any = state.basket.find((item: any) => item.id === action.payload.id);

            if (existingItem) {
                // If the product is already in the cart, update its counterValue
                existingItem.counterValue += action.payload.counterValue;
            } else {
                // If the product is not in the cart, add it
                state.basket.push(action.payload);
            }
        },

        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        increment1: (state, action: PayloadAction<any>) => {
            // action.payload.counterValue += 1
            // state.basket.map((item: any) => item.id === action.payload.id ? item.counterValue += 1 : item.counterValue)
            // state.value += 1
            
        },
        decrement1: (state, action: PayloadAction<any>) => {
            // action.payload.counterValue -= 1
            state.basket.map((item: any) => item.id === action.payload.id ? item.counterValue -= 1 : item.counterValue)
            state.value -= 1
        },

        reset: (state) => {
            state.value = 0
        },

        removeItem: (state, action: PayloadAction<any>) => {
            state.basket = state.basket.filter((item: any) => item.id !== action.payload.id)
        }

    }
    // console.log("🚀 ~ action:", action)
})


export const { increment, decrement, reset, addToCart, increment1, decrement1, removeItem } = counterSlice.actions
export default counterSlice.reducer