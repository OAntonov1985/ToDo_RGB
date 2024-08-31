import {
    LeftSideContainer,
    TitleLeftSide,
    FilterListUl,
    FilterListLi,
    CheckboxFilter,
    BurgerMenuIcon,
    BurgerMenuBox,
} from "./MainContentLeftSide.styled";

import { useDispatch, useSelector } from "react-redux";
import { changeTaskFilter } from "@/app/utils/slise/userSlice";
import AddNewCategory from "../AddNewCategory/AddNewCategory";

export default function MainContetntLeftSide({
    isRenderLeftSide,
    setIsRenderLeftSide,
}) {
    const selectorList = useSelector(state => state.user.categoryList);
    const dispatch = useDispatch();
    const test = useSelector(state => state.user.filterArray);

    function handleChange(event) {
        dispatch(
            changeTaskFilter({
                name: event.target.name,
                checked: event.target.checked,
            }),
        );
    }

    return (
        <>
            <LeftSideContainer isRenderLeftSide={isRenderLeftSide}>
                <TitleLeftSide>
                    <BurgerMenuBox
                        onClick={() => setIsRenderLeftSide(!isRenderLeftSide)}
                    >
                        <BurgerMenuIcon />
                    </BurgerMenuBox>
                    Фільтр по
                </TitleLeftSide>
                {/* <FilterListLi>
                    <CheckboxFilter
                        id='Всі'
                        // defaultChecked={true}
                        checked={checkBoxObject.Всі}
                        onChange={event => handleChange(event)}
                        name='Всі'
                    />{" "}
                    Всі
                </FilterListLi> */}
                <FilterListUl>
                    {selectorList.map(option => (
                        <FilterListLi key={option.id}>
                            <CheckboxFilter
                                id={option.id}
                                checked={option.checked}
                                onChange={event => handleChange(event)}
                                name={option.name}
                            />
                            {option.label}
                        </FilterListLi>
                    ))}
                </FilterListUl>
                <AddNewCategory />
            </LeftSideContainer>
        </>
    );
}
