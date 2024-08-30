// "use client";
import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "@/app/constants/tasks";

const initialState = {
    name: "ToDoList",
    tasksList: tasks,
    isModalOpen: false,
    categoryList: [
        {
            id: "Саморозвиток",
            label: "Саморозвиток",
            name: "Саморозвиток",
            value: "Саморозвиток",
            checked: false,
        },
        {
            id: "Робота",
            label: "Робота",
            name: "Робота",
            value: "Робота",
            checked: false,
        },
        {
            id: "Особисте життя",
            label: "Особисте життя",
            name: "Особисте життя",
            value: "Особисте життя",
            checked: false,
        },
        {
            id: "Домашнє господарство",
            label: "Домашнє господарство",
            name: "Домашнє господарство",
            value: "Домашнє господарство",
            checked: false,
        },
    ],
    taskFilter: {
        Всі: true,
        Саморозвиток: false,
        Робота: false,
        "Особисте життя": false,
        "Домашнє господарство": false,
    },
    filterArray: [],
    nextTaskID: 8,
};

const userSlice = createSlice({
    name: "ToDoList",
    initialState,
    reducers: {
        changeTaskStatus: (state, action) => {
            const { taskID, isChecked } = action.payload;
            const task = state.tasksList.find(task => task.taskID === taskID);

            if (task) {
                task.taskIsDone = isChecked;
            }
        },
        isModalOpenChange: (state, action) => {
            state.isModalOpen = action.payload;
        },
        changeTaskFilter: (state, action) => {
            const { name, checked } = action.payload;
            // console.log(state.taskFilter);

            if (name === "Всі") {
                state.taskFilter = {
                    Всі: checked,
                    Саморозвиток: false,
                    Робота: false,
                    "Особисте життя": false,
                    "Домашнє господарство": false,
                };
                state.tasksList = tasks;
            } else {
                state.taskFilter = {
                    ...state.taskFilter,
                    Всі: false,
                    [name]: checked,
                };
            }
        },
        changingArrayFilter: (state, action) => {
            const { id, checked } = action.payload;
            console.log(id);

            if (id === "Всі") {
                if (checked) {
                    state.tasksList = tasks;
                    state.filterArray = [];
                }
            } else {
                if (checked) {
                    if (!state.filterArray.includes(id)) {
                        state.filterArray.push(id);
                    }
                } else {
                    state.filterArray = state.filterArray.filter(
                        item => item !== id,
                    );
                }

                const updateTaskArray = tasks.filter(task =>
                    state.filterArray.includes(task.taskCategory),
                );

                state.tasksList = updateTaskArray;
            }
        },
        addNewTask: (state, action) => {
            console.log(action.payload);
            const newArr = {
                ...action.payload,
                taskID: state.nextTaskID,
            };
            state.tasksList.push(newArr);
            state.nextTaskID = state.nextTaskID + 1;
        },
        addNewCategory: (state, action) => {
            const newKey = action.payload;
            const newObj = { [newKey]: false };
            const newArray = { ...state.taskFilter, ...newObj };
            // console.log(newArray);
            state.taskFilter = newArray;

            const newSelector = {
                id: newKey,
                label: newKey,
                name: newKey,
                value: newKey,
                checked: false,
            };
            state.categoryList.push(newSelector);
            // console.log(temp);
            // state.categoryList = temp;
        },
    },
});

export const {
    changeTaskStatus,
    isModalOpenChange,
    changeTaskFilter,
    changingArrayFilter,
    addNewTask,
    addNewCategory,
} = userSlice.actions;

export default userSlice.reducer;
