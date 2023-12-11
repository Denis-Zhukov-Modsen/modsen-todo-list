import {StyledButton} from "@/components/Button/styles.ts";
import {ButtonHTMLAttributes} from "react";
import {Variant} from "./typing.ts";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
}

export const Button = ({children, variant = 'primary', ...props}: Props) => {
    return <StyledButton{...props} $variant={variant}>{children}</StyledButton>
}