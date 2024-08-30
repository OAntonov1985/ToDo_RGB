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
import {
    changeTaskFilter,
    changingArrayFilter,
} from "@/app/utils/slise/userSlice";

export default function MainContetntLeftSide({
    isRenderLeftSide,
    setIsRenderLeftSide,
}) {
    const checkBoxObject = useSelector(state => state.user.taskFilter);
    const selectorList = useSelector(state => state.user.categoryList);
    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(
            changeTaskFilter({
                name: event.target.name,
                checked: event.target.checked,
            }),
        );
        dispatch(
            changingArrayFilter({
                id: event.target.id,
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
                <FilterListLi>
                    <CheckboxFilter
                        id='all'
                        defaultChecked={true}
                        onChange={event => handleChange(event)}
                        name='all'
                    />{" "}
                    Всі
                </FilterListLi>

                <FilterListUl>
                    {selectorList.map(option => (
                        <FilterListLi key={option.id}>
                            <CheckboxFilter
                                id={option.id}
                                checked={checkBoxObject.checked}
                                onChange={event => handleChange(event)}
                                name={option.name}
                            />
                            {option.label}
                        </FilterListLi>
                    ))}
                </FilterListUl>
            </LeftSideContainer>
        </>
    );
}
