import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { SpanPlus } from "./AddNewTask.styled";
import { useDispatch } from "react-redux";
import { isModalOpenChange } from "@/app/utils/slise/userSlice";

export default function AddNewTask() {
    const dispatch = useDispatch();
    return (
        <Stack direction='row' spacing={2}>
            <Button
                size='small'
                variant='contained'
                onClick={() => dispatch(isModalOpenChange(true))}
            >
                <SpanPlus>+&nbsp;</SpanPlus> Додати нову задачу
            </Button>
        </Stack>
    );
}
