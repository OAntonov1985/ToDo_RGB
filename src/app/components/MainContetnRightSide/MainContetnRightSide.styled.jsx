import styled from "@emotion/styled";

export const RightSideContainer = styled("div")(() => ({
    display: "flex",
    backgroundColor: "#d7ccc8",
    flex: "1 1 auto",
    padding: "15px",
    flexDirection: "column",
    // height: "1000px",
    gap: "20px",
}));

export const RightSideTitle = styled("div")(() => ({
    fontSize: "20px",
    fontWeight: "bolder",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
}));
