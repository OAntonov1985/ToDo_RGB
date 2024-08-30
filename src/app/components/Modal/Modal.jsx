import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalWindow } from "./Modal.styled";
import { useSelector, useDispatch } from "react-redux";
import {
    isModalOpenChange,
    addNewTask,
    taskIDIncrease,
} from "@/app/utils/slise/userSlice";
import TaskSekector from "../TaskSelector/TaskSelector";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ButtonBox } from "./Modal.styled";
import { FormControlBox } from "./Modal.styled";
import { useState } from "react";

export default function BasicModal() {
    const isModalOpen = useSelector(state => state.user.isModalOpen);
    const nextTaskID = useSelector(state => state.user.nextTaskID);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        taskCategory: "Саморозвиток",
        taskTitle: "",
        taskDescription: "",
        taskIsDone: false,
        taskID: nextTaskID,
    });
    console.log(nextTaskID);

    const [titleError, setTitleError] = useState(false);
    const [descrError, setDescrError] = useState(false);

    const handleChange = event => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    // function submitForm(event) {
    //     event.preventDefault();
    //     if (formData.taskTitle.length < 4) setTitleError(true);
    //     else setTitleError(false);
    //     if (formData.taskDescription.length < 7) setDescrError(true);
    //     else setDescrError(false);
    //     if ((titleError == false) & (descrError == false)) {
    //         setTitleError(false);
    //         setDescrError(false);
    //         dispatch(addNewTask(formData));
    //         dispatch(isModalOpenChange(false));
    //         dispatch(taskIDIncrease());
    //         setFormData({
    //             taskCategory: "Саморозвиток",
    //             taskTitle: "",
    //             taskDescription: "",
    //             taskIsDone: false,
    //         });
    //         console.log(formData);
    //     }
    // }
    function submitForm(event) {
        event.preventDefault();

        const titleHasError = formData.taskTitle.length < 4;
        const descriptionHasError = formData.taskDescription.length < 7;

        setTitleError(titleHasError);
        setDescrError(descriptionHasError);

        if (!titleHasError && !descriptionHasError) {
            dispatch(addNewTask(formData));
            dispatch(isModalOpenChange(false));
            dispatch(taskIDIncrease());

            setFormData({
                taskCategory: "Саморозвиток",
                taskTitle: "",
                taskDescription: "",
                taskIsDone: false,
            });
        }
    }

    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={() => dispatch(isModalOpenChange(false))}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <ModalWindow>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                        fontWeight='bold'
                    >
                        Додайте нову задачу
                    </Typography>
                    <FormControlBox>
                        <TaskSekector handleChange={handleChange} />
                        <TextField
                            id='taskTitle'
                            label='Назва'
                            variant='outlined'
                            required
                            minLength={3}
                            error={titleError ? true : null}
                            onChange={handleChange}
                            helperText={
                                titleError
                                    ? "Мінімальна довжина символів має бути 3"
                                    : null
                            }
                        />
                        <TextField
                            id='taskDescription'
                            label='Опис'
                            variant='outlined'
                            multiline
                            rows={4}
                            required
                            minLength={10}
                            value={formData.taskDescription}
                            onChange={handleChange}
                            error={descrError ? true : null}
                            helperText={
                                descrError
                                    ? "Мінімальний опис має бути 10 символів"
                                    : null
                            }
                        />
                        <ButtonBox>
                            <Button
                                variant='outlined'
                                onClick={() =>
                                    dispatch(isModalOpenChange(false))
                                }
                            >
                                Відмінити
                            </Button>
                            <Button
                                variant='contained'
                                type='submit'
                                onClick={submitForm}
                            >
                                Зберегти
                            </Button>
                        </ButtonBox>
                    </FormControlBox>
                </ModalWindow>
            </Modal>
        </div>
    );
}
