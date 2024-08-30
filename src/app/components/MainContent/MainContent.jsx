"use client";
import { MainContetnContainer } from "./MainContent.styled";
import MainContetntLeftSide from "../MainContentLeftSide/MainContetnLeftSide";
import MainContetnRightSide from "../MainContetnRightSide/MainContetnRightSide";
import { useState } from "react";
import BasicModal from "../Modal/Modal";

export default function MainContetn() {
    const [isRenderLeftSide, setIsRenderLeftSide] = useState(true);

    return (
        <MainContetnContainer>
            <MainContetntLeftSide
                isRenderLeftSide={isRenderLeftSide}
                setIsRenderLeftSide={setIsRenderLeftSide}
            />
            <MainContetnRightSide
                setIsRenderLeftSide={setIsRenderLeftSide}
                isRenderLeftSide={isRenderLeftSide}
            />
            <BasicModal />
        </MainContetnContainer>
    );
}
