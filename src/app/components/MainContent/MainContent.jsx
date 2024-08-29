"use client";
import { MainContetnContainer } from "./MainContent.styled";
import MainContetntLeftSide from "../MainContentLeftSide/MainContetnLeftSide";
import MainContetnRightSide from "../MainContetnRightSide/MainContetnRightSide";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MainContetn() {
    const [isRenderLeftSide, setIsRenderLeftSide] = useState(true);
    // const tasksList = useSelector(state => state.user.tasksList);

    // console.log(tasksList); // This will log the tasksList array to the console

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
        </MainContetnContainer>
    );
}
