import { createSlice } from "@reduxjs/toolkit";

// Создание среза состояния для управления видимостью корзины
const cartUiSlice = createSlice({

    name: "CartUi", // Имя среза состояния
    initialState: {
        cartIsVisible: false, // Начальное состояние, корзина изначально скрыта
    },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible; // Действие для переключения видимости корзины
        }
    },
})

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice;
