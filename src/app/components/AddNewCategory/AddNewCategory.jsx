import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import { AddCategoryContainer } from "./AddNewCategory.styled";
import { useDispatch } from "react-redux";
import { addNewCategory } from "@/app/utils/slise/userSlice";

export default function AddNewCategory() {
    const [isError, setIsError] = useState(false);
    const [newCatName, setNewCatName] = useState("");
    const dispatch = useDispatch();

    function addNewCategoryToList(event) {
        if (newCatName.length <= 2) {
            setIsError(true);
        } else {
            setIsError(false);
            setNewCatName("");
            dispatch(addNewCategory(newCatName));
        }
    }
    return (
        <AddCategoryContainer spacing={1}>
            <Button
                variant='outlined'
                size='small'
                onClick={addNewCategoryToList}
            >
                Додати нову категорію
            </Button>
            <TextField
                id='newCategory'
                label='Назва категорії'
                size='small'
                required
                minLength={3}
                error={isError ? true : null}
                onChange={event => setNewCatName(event.target.value)}
                helperText={
                    isError ? "Мінімальна довжина символів має бути 3" : null
                }
                value={newCatName}
            />
        </AddCategoryContainer>
    );
}
