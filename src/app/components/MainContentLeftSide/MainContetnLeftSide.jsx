import {
    LeftSideContainer,
    TitleLeftSide,
    FilterListUl,
    FilterListLi,
    CheckboxFilter,
} from "./MainContentLeftSide.styled";

export default function MainContetntLeftSide() {
    return (
        <>
            <LeftSideContainer>
                <TitleLeftSide>Фільтр по</TitleLeftSide>
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
