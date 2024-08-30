// "use client";
import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "@/app/constants/tasks";

const initialState = {
    name: "ToDoList",
    tasksList: tasks,
    isModalOpen: false,
    taskFilter: {
        all: true,
        personalLife: false,
        job: false,
        houseWork: false,
        selfDevelopment: false,
    },
    filterArray: [],
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
            console.log(action.payload);
        },
        changeTaskFilter: (state, action) => {
            const { name, checked } = action.payload;

            if (name === "all") {
                state.taskFilter = {
                    all: checked,
                    personalLife: false,
                    job: false,
                    houseWork: false,
                    selfDevelopment: false,
                };
                state.tasksList = tasks;
            } else {
                state.taskFilter = {
                    ...state.taskFilter,
                    all: false,
                    [name]: checked,
                };
            }
        },
        changingArrayFilter: (state, action) => {
            const { id, checked } = action.payload;

            if (id === "all") {
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

            console.log(state.tasksList);
        },
    },
});

export const {
    changeTaskStatus,
    isModalOpenChange,
    changeTaskFilter,
    changingArrayFilter,
} = userSlice.actions;

export default userSlice.reducer;
