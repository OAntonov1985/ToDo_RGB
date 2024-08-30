// "use client";
import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "@/app/constants/tasks";

const initialState = {
    name: "ToDoList",
    tasksList: tasks,
    isModalOpen: false,
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
    },
});

export const { changeTaskStatus, isModalOpenChange } = userSlice.actions;

export default userSlice.reducer;
