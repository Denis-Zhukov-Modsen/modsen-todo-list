import {Input} from "@/components/Input";
import Loupe from "@/assets/images/loupe.svg";
import {StyledButton, Wrapper} from "@/components/FindProfile/styles.ts";

export const FindProfile = () => (
    <Wrapper>
        <h3>GitHub info</h3>
        <Input placeholder="Search name..."/>
        <StyledButton>
            <img src={Loupe} alt="Find"/>
        </StyledButton>
    </Wrapper>
)