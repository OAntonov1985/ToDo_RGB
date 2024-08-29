"use client";
import { MainContetnContainer } from "./MainContent.styled";
import MainContetntLeftSide from "../MainContentLeftSide/MainContetnLeftSide";
import MainContetnRightSide from "../MainContetnRightSide/MainContetnRightSide";

export default function MainContetn() {
    return (
        <MainContetnContainer>
            <MainContetntLeftSide />
            <MainContetnRightSide />
        </MainContetnContainer>
    );
}
