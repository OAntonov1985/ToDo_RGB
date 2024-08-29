"use client";
import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "@/app/constants/tasks";

const initialState = {
    name: "ToDoList",
    tasksList: tasks,
};

const userSlice = createSlice({
    name: "ToDoList",
    initialState,
    reducers: {
        totalGoods: (state, action) => {
            state.quantityOfGoods = action.payload;
        },
        reduceGood: (state, action) => {
            const arrayIndex = state.userBasket.findIndex(item => {
                return item.id === action.payload;
            });

            if (arrayIndex !== -1 && state.userBasket[arrayIndex].number > 1) {
                state.userBasket[arrayIndex].number =
                    state.userBasket[arrayIndex].number - 1;
                state.userBasket[arrayIndex].totalPrice =
                    state.userBasket[arrayIndex].number *
                    state.userBasket[arrayIndex].price;
            }
            const updatedBasketJSON = JSON.stringify(state.userBasket);
            localStorage.setItem("BASKET", updatedBasketJSON);

            const newTotalGoods = state.userBasket.reduce(
                (accum, item) => (accum = accum + item.number),
                0,
            );
            state.quantityOfGoods = newTotalGoods;
            localStorage.setItem("totalGoods", newTotalGoods);

            const newTotalPriseInAllBasket = state.userBasket.reduce(
                (accum, item) => (accum = accum + item.price * item.number),
                0,
            );
            state.totalPriseInAllBasket = newTotalPriseInAllBasket;
            localStorage.setItem(
                "totalPriseInAllBasket",
                newTotalPriseInAllBasket,
            );
        },
    },
});

export const { increaseGood, totalGoods, reduceGood, setUserInfo } =
    userSlice.actions;

export default userSlice.reducer;
