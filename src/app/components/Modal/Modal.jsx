import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalWindow } from "./Modal.styled";
import { useSelector, useDispatch } from "react-redux";
import { isModalOpenChange } from "@/app/utils/slise/userSlice";
import TaskSekector from "../TaskSelector/TaskSelector";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ButtonBox } from "./Modal.styled";
import { FormControlBox } from "./Modal.styled";
import { useState } from "react";

export default function BasicModal() {
    const isModalOpen = useSelector(state => state.user.isModalOpen);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        taskCategory: "",
        taskTitle: "",
        taskDescription: "",
        taskIsDone: false,
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

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
                        <TaskSekector />
                        <TextField
                            id='taskTitle'
                            label='Назва'
                            variant='outlined'
                            required
                            minLength={5}
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
                            <Button variant='contained' type='submit'>
                                Зберегти
                            </Button>
                        </ButtonBox>
                    </FormControlBox>
                </ModalWindow>
            </Modal>
        </div>
    );
}
