import Avatar from '@/assets/images/avatar.png';

import {Wrapper} from "@/components/Card/styles.ts";

export const Card = () => {
    return <Wrapper>
        <div>Login: IvanovIvan</div>
        <img src={Avatar} alt="avatar"/>
    </Wrapper>
}