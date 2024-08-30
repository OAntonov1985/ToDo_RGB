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
import { changeTaskStatus } from "@/app/utils/slise/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { UnpreformedTaskCategory } from "./UnperformedTasks.styles";

export default function UnperformedTasks() {
    const tasksList = useSelector(state => state.user.tasksList);
    const unpreformedTasks = tasksList.filter(task => task.taskIsDone == true);
    const dispatch = useDispatch();

    return unpreformedTasks.length > 0 ? (
        <UlListTasks>
            <UlTitle>Виконані завдання</UlTitle>
            {unpreformedTasks && unpreformedTasks.length > 0
                ? unpreformedTasks.map(task => {
                      return (
                          <LiListTasks key={task.taskID}>
                              <UnpreformedTaskCategory>
                                  <TaskSpanElement>
                                      Категорія:&nbsp;
                                  </TaskSpanElement>
                                  {task.taskCategory}
                              </UnpreformedTaskCategory>
                              <UnpreformedTaskCategory>
                                  <TaskSpanElement>
                                      Назва:&nbsp;
                                  </TaskSpanElement>
                                  {task.taskTitle}
                              </UnpreformedTaskCategory>
                              <UnpreformedTaskCategory>
                                  <TaskSpanElement>Опис:&nbsp;</TaskSpanElement>
                                  {task.taskDescription}
                              </UnpreformedTaskCategory>
                              <UnpreformedTaskCategory>
                                  <TaskSpanElement>
                                      Статус задачі:&nbsp;
                                  </TaskSpanElement>
                                  <TaskStatus
                                      defaultChecked={task.taskIsDone}
                                      id={task.taskID}
                                      onChange={event =>
                                          dispatch(
                                              changeTaskStatus({
                                                  taskID: task.taskID,
                                                  isChecked:
                                                      event.currentTarget
                                                          .checked,
                                              }),
                                          )
                                      }
                                  />
                                  {/* checked={!task.taskIsDone} */}
                              </UnpreformedTaskCategory>
                          </LiListTasks>
                      );
                  })
                : null}
        </UlListTasks>
    ) : null;
}
