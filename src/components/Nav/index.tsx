import {navLinks} from "@/constants/nav-links.ts";
import {StyledLink, Wrapper} from "./styles.ts";
import {useLocation} from "react-router-dom";

export const Nav = () => {
    const {pathname} = useLocation();

    const names = Object.keys(navLinks) as (keyof typeof navLinks)[];

    return <Wrapper>
        {names.map(name => (
            <StyledLink
                $active={pathname === navLinks[name]}
                key={navLinks[name]}
                to={navLinks[name]}
            >{name}</StyledLink>
        ))}
    </Wrapper>
}