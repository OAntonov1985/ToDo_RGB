import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { SpanPlus } from "./AddNewTask.styled";

export default function AddNewTask() {
    return (
        <Stack direction='row' spacing={2}>
            <Button size='small' variant='contained'>
                <SpanPlus>+&nbsp;</SpanPlus> Додати нову задачу
            </Button>
        </Stack>
    );
}
