import {
    LeftSideContainer,
    TitleLeftSide,
    FilterListUl,
    FilterListLi,
    CheckboxFilter,
    BurgerMenuIcon,
    BurgerMenuBox,
} from "./MainContentLeftSide.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeTaskFilter,
    changingArrayFilter,
} from "@/app/utils/slise/userSlice";

export default function MainContetntLeftSide({
    isRenderLeftSide,
    setIsRenderLeftSide,
}) {
    const [checkedValues, setCheckedValues] = useState({
        all: true,
        personalLife: false,
        job: false,
        houseWork: false,
        selfDevelopment: false,
    });
    const checkBoxObject = useSelector(state => state.user.taskFilter);
    const dispatch = useDispatch();

    function handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.checked);
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
                <FilterListUl>
                    <FilterListLi>
                        <CheckboxFilter
                            id='all'
                            checked={checkBoxObject.all}
                            onChange={event => handleChange(event)}
                            name='all'
                        />
                        Всі
                    </FilterListLi>
                    <FilterListLi>
                        <CheckboxFilter
                            id='Саморозвиток'
                            checked={checkBoxObject.selfDevelopment}
                            onChange={event => handleChange(event)}
                            // onChange={event => console.log(event.target.id)}
                            name='selfDevelopment'
                        />
                        Саморозвиток
                    </FilterListLi>
                    <FilterListLi>
                        <CheckboxFilter
                            id='Робота'
                            checked={checkBoxObject.job}
                            onChange={event => handleChange(event)}
                            name='job'
                        />
                        Робота
                    </FilterListLi>
                    <FilterListLi>
                        <CheckboxFilter
                            id='Особисте життя'
                            checked={checkBoxObject.personalLife}
                            onChange={event => handleChange(event)}
                            name='personalLife'
                        />
                        Особисте життя
                    </FilterListLi>
                    <FilterListLi>
                        <CheckboxFilter
                            id='Домашнє господарство'
                            checked={checkBoxObject.houseWork}
                            onChange={event => handleChange(event)}
                            name='houseWork'
                        />
                        Домашнє господарство
                    </FilterListLi>
                </FilterListUl>
            </LeftSideContainer>
        </>
    );
}
