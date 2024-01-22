"use client"
import { configureStore } from "@reduxjs/toolkit";
import cart from "./slice";
import { Provider } from "react-redux";

import { Toaster } from 'react-hot-toast'

const store = configureStore({
    reducer:
    {
        cart
    }
})


const Providing = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>
        {children}
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
    </Provider>

}

export default Providing