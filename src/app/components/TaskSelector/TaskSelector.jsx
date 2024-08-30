import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material";
import { useState } from "react";

export default function TaskSekector({ handleChange }) {
    const [taslSelector, setTaskSelector] = useState("Саморозвиток");
    return (
        <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label' size='normal'>
                Категорія
            </InputLabel>
            <Select
                labelId='demo-simple-select-label'
                id='taskCategory'
                value={taslSelector}
                label='Категорія'
                onChange={event => {
                    setTaskSelector(event.target.value);
                    handleChange({
                        target: {
                            id: "taskCategory",
                            value: event.target.value,
                        },
                    });
                }}
            >
                <MenuItem value={"Робота"}>Робота</MenuItem>
                <MenuItem value={"Особисте життя"}>Особисте життя</MenuItem>
                <MenuItem value={"Домашнє господарство"}>
                    Домашнє господарство
                </MenuItem>
                <MenuItem value={"Саморозвиток"}>Саморозвиток</MenuItem>
            </Select>
        </FormControl>
    );
}
