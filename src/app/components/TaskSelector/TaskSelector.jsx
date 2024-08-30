import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TaskSekector({ handleChange }) {
    const [taskSelector, setTaskSelector] = useState("Саморозвиток");
    const selectorList = useSelector(state => state.user.categoryList);

    return (
        <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label' size='normal'>
                Категорія
            </InputLabel>
            <Select
                labelId='demo-simple-select-label'
                id='taskCategory'
                value={taskSelector}
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
                {selectorList.map(category => (
                    <MenuItem key={category.id} value={category.value}>
                        {category.value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
