import {useCallback, useState} from "react";
import {useLocation} from "react-router-dom";
import {navLinks} from "@/constants/nav-links.ts";
import MenuIcon from "@/assets/images/menu.svg";
import {StyledLink, Wrapper, Menu} from "./styles.ts";

export const FullscreenMenu = () => {
    const {pathname} = useLocation();

    const [open, setOpen] = useState(false);

    const handleClick = useCallback(() => {
        setOpen(prev => !prev)
    }, []);

    const names = Object.keys(navLinks) as (keyof typeof navLinks)[];

    return <>
        <Menu onClick={handleClick}><img src={MenuIcon} alt="menu"/></Menu>
        {open && <Wrapper>
            {names.map(name => (
                <StyledLink
                    $active={pathname === navLinks[name]}
                    key={navLinks[name]}
                    to={navLinks[name]}
                >{name}</StyledLink>
            ))}
        </Wrapper>}
    </>
}