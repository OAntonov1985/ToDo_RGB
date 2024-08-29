import { Colors } from "@/app/utils/Colors/Colors";
import styled from "@emotion/styled";
import { Checkbox } from "@mui/material";

export const UlTitle = styled("ul")(() => ({
    fontWeight: "bold",
    marginBottom: "20px",
}));

export const UlListTasks = styled("ul")(() => ({
    width: "100%",
    padding: "5px",
}));

export const LiListTasks = styled("li")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    backgroundColor: Colors.white,
    padding: "10px",
    borderRadius: "10px",
}));

export const TaskTitle = styled("div")(() => ({
    // width: "100%",
    // display: "flex",
    // gap: "5px",
}));

export const TaskCategory = styled("div")(() => ({
    // width: "100%",
    // display: "flex",
    // gap: "5px",
}));

export const TaskDescription = styled("div")(() => ({
    // width: "100%",
    // display: "flex",
    // gap: "5px",
}));

export const TaskStatus = styled(Checkbox)(({ taskIsDone }) => ({
    // width: "100%",
    // display: "flex",
    // gap: "5px",
}));

export const TaskSpanElement = styled("span")(() => ({
    fontWeight: "bold",
}));

export const TaskStatusBox = styled("div")(() => ({}));
