import {
    LeftSideContainer,
    TitleLeftSide,
    FilterListUl,
    FilterListLi,
    CheckboxFilter,
    BurgerMenuIcon,
    BurgerMenuBox,
} from "./MainContentLeftSide.styled";
import { SpanPlus } from "../AddNewTask/AddNewTask.styled";
import { useDispatch, useSelector } from "react-redux";
import {
    changeTaskFilter,
    changingArrayFilter,
} from "@/app/utils/slise/userSlice";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
                        id='Всі'
                        // defaultChecked={true}
                        checked={checkBoxObject.Всі}
                        onChange={event => handleChange(event)}
                        name='Всі'
                    />{" "}
                    Всі
                </FilterListLi>

                <FilterListUl>
                    {selectorList.map(option => (
                        <FilterListLi key={option.id}>
                            <CheckboxFilter
                                id={option.id}
                                checked={checkBoxObject[option.id]}
                                onChange={event => handleChange(event)}
                                name={option.name}
                            />
                            {option.label}
                        </FilterListLi>
                    ))}
                </FilterListUl>
                <Stack direction='row' spacing={2}>
                    <Button
                        size='small'
                        variant='contained'
                        // onClick={() => dispatch(isModalOpenChange(true))}
                    >
                        <SpanPlus>+&nbsp;</SpanPlus> Додати нову задачу
                    </Button>
                </Stack>
            </LeftSideContainer>
        </>
    );
}
