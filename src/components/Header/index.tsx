import {Logo, Wrapper} from "@/components/Header/styles.ts";
import {Nav} from "@/components/Nav";
import {useMediaQuery} from "usehooks-ts";
import {FullscreenMenu} from "@/components/FullscreenMenu";

export const Header = () => {
    const matches = useMediaQuery('(max-width: 648px)')

    return <Wrapper>
        <Logo>Modsen Todo list</Logo>
        {matches ? <FullscreenMenu/> : <Nav/>}
    </Wrapper>
}