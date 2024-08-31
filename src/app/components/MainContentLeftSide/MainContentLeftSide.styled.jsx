import styled from "@emotion/styled";
import { Colors } from "@/app/utils/Colors/Colors";
import { Checkbox } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const LeftSideContainer = styled("div")(({ isRenderLeftSide }) => ({
    backdropColor: Colors.bgColorLeft,
    minWidth: "290px",
    display: isRenderLeftSide ? "flex" : "none",
    flexDirection: "column",
    padding: "10px",
}));

export const TitleLeftSide = styled("div")(() => ({
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginLeft: "9px",
}));

export const FilterListUl = styled("ul")(() => ({
    fontSize: "14px",
    marginBottom: "30px",
    alignItems: "stretch",
    justifyContent: "spase-between",
    "@media (max-width: 800px)": {
        display: "flex",
        flexWrap: "wrap",
    },
}));

export const FilterListLi = styled("li")(() => ({
    fontSize: "14px",
    listStyle: "none",
}));

export const CheckboxFilter = styled(Checkbox)(() => ({
    borderRadius: "50%",
}));

export const BurgerMenuBox = styled("div")(() => ({
    cursor: "pointer",
    zIndex: "2",
    boxSizing: "border-box",
    display: "flex",
    gap: "10px",
}));

export const BurgerMenuIcon = styled(MenuIcon)(() => ({}));
