import styled from "@emotion/styled";
import { FormControl } from "@mui/material";

export const ModalWindow = styled("div")(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "white",
    transform: "translate(-50%, -50%)",
    width: "600px",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
}));

export const FormControlBox = styled(FormControl)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
}));

export const ButtonBox = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
}));
