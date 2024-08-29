import {
    UlListTasks,
    UlTitle,
    LiListTasks,
    TaskCategory,
    TaskSpanElement,
    TaskTitle,
    TaskDescription,
    TaskStatusBox,
    TaskStatus,
} from "../PerformedTasks/PerformedTasks.styled";
import { tasks } from "../../constants/tasks";

export default function UnperformedTasks() {
    const unpreformedTasks = tasks.filter(task => task.taskIsDone == true);
    return (
        <UlListTasks>
            <UlTitle>Виконані завдання</UlTitle>
            {unpreformedTasks && unpreformedTasks.length > 0
                ? unpreformedTasks.map(task => {
                      return (
                          <LiListTasks key={task.taskID}>
                              <TaskCategory>
                                  <TaskSpanElement>
                                      Категорія:&nbsp;
                                  </TaskSpanElement>
                                  {task.taskCategory}
                              </TaskCategory>
                              <TaskTitle>
                                  <TaskSpanElement>
                                      Назва:&nbsp;
                                  </TaskSpanElement>
                                  {task.taskTitle}
                              </TaskTitle>
                              <TaskDescription>
                                  <TaskSpanElement>Опис:&nbsp;</TaskSpanElement>
                                  {task.taskDescription}
                              </TaskDescription>
                              <TaskStatusBox>
                                  <TaskSpanElement>
                                      Статус задачі:&nbsp;
                                  </TaskSpanElement>
                                  <TaskStatus
                                      checked={task.taskIsDone}
                                  ></TaskStatus>
                              </TaskStatusBox>
                          </LiListTasks>
                      );
                  })
                : null}
        </UlListTasks>
    );
}
