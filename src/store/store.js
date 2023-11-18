import {configureStore} from "@reduxjs/toolkit";

import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";

const store = configureStore({
    // храним состояние
    reducer: {
        cart: cartSlice.reducer,
        cartUi:cartUiSlice.reducer,
    }

})

export default store;