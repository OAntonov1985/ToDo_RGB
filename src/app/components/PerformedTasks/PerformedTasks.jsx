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
import { tasks } from "../../constants/tasks";

export default function PerformedTasks() {
    const preformedTasks = tasks.filter(task => task.taskIsDone == true);
    return (
        <UlListTasks>
            <UlTitle>Активні завдання</UlTitle>
            {preformedTasks && preformedTasks.length > 0
                ? preformedTasks.map(task => {
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
                                  <TaskStatus></TaskStatus>
                              </TaskStatusBox>
                          </LiListTasks>
                      );
                  })
                : null}
        </UlListTasks>
    );
}
