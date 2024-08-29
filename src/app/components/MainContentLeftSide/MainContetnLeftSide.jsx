import {
    LeftSideContainer,
    TitleLeftSide,
    FilterListUl,
    FilterListLi,
    CheckboxFilter,
    BurgerMenuIcon,
    BurgerMenuBox,
} from "./MainContentLeftSide.styled";

export default function MainContetntLeftSide({
    isRenderLeftSide,
    setIsRenderLeftSide,
}) {
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
                        <CheckboxFilter id='all' />
                        всі
                    </FilterListLi>
                    <FilterListLi>
                        <CheckboxFilter id='active' />
                        активні
                    </FilterListLi>
                    <FilterListLi>
                        <CheckboxFilter id='unactive' />
                        неактивні
                    </FilterListLi>
                </FilterListUl>
            </LeftSideContainer>
        </>
    );
}
