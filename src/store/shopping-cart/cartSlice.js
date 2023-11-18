import {createSlice} from "@reduxjs/toolkit";

// Начальное состояние корзины
const initialState = {
    cartItems: [],        // Элементы корзины
    totalQuantity: 0,     // Общее количество
    totalAmount: 0        // Общая сумма
}

// Создаем Redux slice (срез) для управления состоянием корзины
const cartSlice = createSlice({
    name: 'cart',               // Название среза
    initialState: initialState,  // Исходное состояние

    reducers: {
        addItem(state, action) {
            const newItem = action.payload; // Новые товары
            const existingItem = state.cartItems.find(item => item.id === newItem.id); // Существующий элемент
            state.totalQuantity++; // Увеличиваем общее количество товаров в корзине

            if (!existingItem) {
                // Если товара с таким ID нет в корзине, добавляем новый элемент
                state.cartItems.push(
                    {
                        id: newItem.id,
                        title: newItem.title,
                        image01: newItem.image01,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price,
                    }
                )
            } else {
                // Если товар с таким ID уже есть в корзине, увеличиваем количество и обновляем общую стоимость
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }
            // Обновляем общую сумму корзины, просуммировав цену всех товаров в корзине
            state.totalAmount = state.cartItems.reduce((total, item) =>
                (total + Number(item.price) * Number(item.quantity)), 0);
        },

        //умешьшение продукта
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);

            } else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
            }
            state.totalAmount = state.cartItems.reduce((total, item) =>
                (total + Number(item.price) * Number(item.quantity)), 0);
        },

        //удаление продукта
        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuantity -= existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                (total + Number(item.price) * Number(item.quantity)), 0);
        },
    }
})

// Экспортируем действия и редьюсеры для использования в Redux
export const cartAction = cartSlice.actions;
export default cartSlice;
