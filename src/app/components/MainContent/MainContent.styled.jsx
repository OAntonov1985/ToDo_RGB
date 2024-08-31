import styled from "@emotion/styled";
import { Colors } from "@/app/utils/Colors/Colors";

export const MainContetnContainer = styled("div")(() => ({
    display: "flex",
    flex: "1",
    minHeight: "100%",
    "@media (max-width: 800px)": {
        flexDirection: "column",
    },
}));
