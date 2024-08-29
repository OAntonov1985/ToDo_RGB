import { HeaderBox, HeaderLogoCompany, HeaderText } from "./Header.styled";
import logo from "../../../../public/Images/logo.svg";

export default function Header() {
    return (
        <HeaderBox>
            <HeaderLogoCompany src={logo} alt='logo image' />
            <HeaderText> To Do</HeaderText>
        </HeaderBox>
    );
}
