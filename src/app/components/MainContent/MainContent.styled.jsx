import styled from "@emotion/styled";
import { Colors } from "@/app/utils/Colors/Colors";

export const MainContetnContainer = styled("div")(() => ({
    display: "flex",
    // flexDirection: "column",
    // flexWrap: "wrap",
    // flex: "1",
    "@media (max-width: 800px)": {
        flexDirection: "column",
        // flexWrap: "wrap",
        // flex: "1",
    },
}));
