import { createSlice } from "@reduxjs/toolkit";
import { tasks, categoryList } from "@/app/constants/tasks";

const initialState = {
    name: "ToDoList",
    tasksList: tasks,
    isModalOpen: false,
    categoryList: categoryList,
    chekedTaskList: tasks,
    resultTaskList: tasks,
    filterArray: [],
    nextTaskID: 8,
};

const userSlice = createSlice({
    name: "ToDoList",
    initialState,
    reducers: {
        changeTaskStatus: (state, action) => {
            const { taskID, isChecked } = action.payload;
            const taskChek = state.chekedTaskList.find(
                task => task.taskID === taskID,
            );
            const taskFilter = state.resultTaskList.find(
                task => task.taskID === taskID,
            );

            if (taskChek && taskFilter) {
                taskChek.taskIsDone = isChecked;
                taskFilter.taskIsDone = isChecked;
            }
        },
        isModalOpenChange: (state, action) => {
            state.isModalOpen = action.payload;
        },
        changeTaskFilter: (state, action) => {
            const { name, checked } = action.payload;

            if (name == "Всі") {
                state.categoryList.forEach(item => (item.checked = false));
                const item = state.categoryList.find(obj => obj.id === name);
                item.checked = true;
                state.resultTaskList = state.chekedTaskList;
                state.filterArray = [];
            } else {
                const item = state.categoryList.find(obj => obj.id === "Всі");
                item.checked = false;

                const itemChek = state.categoryList.find(
                    obj => obj.id === name,
                );
                itemChek.checked = checked;

                if (checked) {
                    state.filterArray.push(name);
                } else {
                    const index = state.filterArray.indexOf(name);
                    if (index !== -1) {
                        state.filterArray.splice(index, 1);
                    }
                }

                state.resultTaskList = state.chekedTaskList.filter(item =>
                    state.filterArray.includes(item.taskCategory),
                );
            }
        },
        addNewTask: (state, action) => {
            const newArr = {
                ...action.payload,
                taskID: state.nextTaskID,
            };
            state.tasksList.push(newArr);
            state.chekedTaskList.push(newArr);
            state.resultTaskList.push(newArr);
            state.nextTaskID = state.nextTaskID + 1;
        },
        addNewCategory: (state, action) => {
            const newKey = action.payload;
            const newSelector = {
                id: newKey,
                label: newKey,
                name: newKey,
                value: newKey,
                checked: false,
            };
            state.categoryList.push(newSelector);
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
