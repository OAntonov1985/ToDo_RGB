import styled from "@emotion/styled";
import { Colors } from "@/app/utils/Colors/Colors";
import { Checkbox } from "@mui/material";

export const LeftSideContainer = styled("div")(() => ({
    backdropColor: Colors.bgColorLeft,
    width: "290px",
    height: "1000px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
}));

export const TitleLeftSide = styled("div")(() => ({
    fontSize: "14px",
}));

export const FilterListUl = styled("ul")(() => ({
    fontSize: "14px",
}));

export const FilterListLi = styled("li")(() => ({
    fontSize: "14px",
    listStyle: "none",
}));

export const CheckboxFilter = styled(Checkbox)(() => ({
    // fontSize: "14px",
    // listStyle: "none",
}));
