import {InputHTMLAttributes} from "react";
import {StyledInput} from "@/components/Input/styles.ts";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export const Input = (props: Props) => <StyledInput {...props}/>;