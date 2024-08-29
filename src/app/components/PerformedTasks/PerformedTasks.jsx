import {
    UlListTasks,
    UlTitle,
    LiListTasks,
    TaskTitle,
    TaskCategory,
    TaskDescription,
    TaskSpanElement,
} from "./PerformedTasks.styled";
import { tasks } from "../../constants/tasks";

export default function PerformedTasks() {
    return (
        <UlListTasks>
            <UlTitle> Виконані завдання</UlTitle>
            {tasks && tasks.length > 0
                ? tasks.map(task => {
                      return (
                          <LiListTasks key={task.taskID}>
                              <TaskCategory>
                                  <TaskSpanElement>
                                      Категорія:&nbsp;
                                  </TaskSpanElement>
                                  {task.taskCategory} Особисте життя
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
                          </LiListTasks>
                      );
                  })
                : null}
        </UlListTasks>
    );
}
