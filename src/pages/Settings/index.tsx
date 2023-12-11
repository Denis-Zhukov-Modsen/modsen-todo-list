import {Wrapper} from "@/pages/Settings/styles.ts";
import {ChangeTheme} from "@/components/ChangeTheme";
import {FindProfile} from "@/components/FindProfile";
import {Card} from "@/components/Card";

export const Settings = () => {
    return <Wrapper>
        <ChangeTheme/>
        <FindProfile/>
        <Card/>
    </Wrapper>
}