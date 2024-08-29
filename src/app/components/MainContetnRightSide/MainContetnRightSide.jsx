import {
    RightSideContainer,
    RightSideTitle,
} from "./MainContetnRightSide.styled";
import {
    BurgerMenuBox,
    BurgerMenuIcon,
} from "../MainContentLeftSide/MainContentLeftSide.styled";

import AddNewTask from "../AddNewTask/AddNewTask";
import PerformedTasks from "../PerformedTasks/PerformedTasks";
import UnperformedTasks from "../UnperformedTasks/UnperformedTasks";

export default function MainContetnRightSide({
    isRenderLeftSide,
    setIsRenderLeftSide,
}) {
    return (
        <RightSideContainer>
            <RightSideTitle>
                <BurgerMenuBox
                // onClick={() => setIsRenderLeftSide(!isRenderLeftSide)}
                >
                    <BurgerMenuIcon
                        onClick={() => setIsRenderLeftSide(!isRenderLeftSide)}
                    />
                    Мої задачі
                </BurgerMenuBox>
                <AddNewTask />
            </RightSideTitle>
            <PerformedTasks />
            <UnperformedTasks />
        </RightSideContainer>
    );
}
