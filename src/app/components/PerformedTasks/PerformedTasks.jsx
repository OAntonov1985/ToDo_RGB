import {
    UlListTasks,
    UlTitle,
    LiListTasks,
    TaskTitle,
    TaskCategory,
    TaskDescription,
    TaskSpanElement,
    TaskStatusBox,
    TaskStatus,
} from "./PerformedTasks.styled";
import { useSelector, useDispatch } from "react-redux";
import { changeTaskStatus } from "@/app/utils/slise/userSlice";

export default function PerformedTasks() {
    const tasksList = useSelector(state => state.user.resultTaskList);
    const preformedTasks = tasksList.filter(task => task.taskIsDone == false);
    const dispatch = useDispatch();

    return preformedTasks.length > 0 ? (
        <UlListTasks>
            <UlTitle>Активні завдання</UlTitle>
            {preformedTasks.map(task => (
                <LiListTasks key={task.taskID}>
                    <TaskCategory taskIsDone={task.taskIsDone}>
                        <TaskSpanElement>Категорія:&nbsp;</TaskSpanElement>
                        {task.taskCategory}
                    </TaskCategory>
                    <TaskTitle>
                        <TaskSpanElement>Назва:&nbsp;</TaskSpanElement>
                        {task.taskTitle}
                    </TaskTitle>
                    <TaskDescription>
                        <TaskSpanElement>Опис:&nbsp;</TaskSpanElement>
                        {task.taskDescription}
                    </TaskDescription>
                    <TaskStatusBox>
                        <TaskSpanElement>Статус задачі:&nbsp;</TaskSpanElement>
                        <TaskStatus
                            id={task.taskID}
                            defaultChecked={task.taskIsDone}
                            onChange={event =>
                                dispatch(
                                    changeTaskStatus({
                                        taskID: task.taskID,
                                        isChecked: event.currentTarget.checked,
                                    }),
                                )
                            }
                        />
                    </TaskStatusBox>
                </LiListTasks>
            ))}
        </UlListTasks>
    ) : null;
}
