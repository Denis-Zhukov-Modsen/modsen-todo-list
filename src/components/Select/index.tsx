import {SelectHTMLAttributes} from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    items: { value: string, text: string }[]
    selected?: string
}

export const Select = ({items, selected, ...props}: Props) => {
    return <select {...props} defaultValue={selected}>
        {items.map(({value, text}) => (
            <option key={value} value={value}>{text}</option>
        ))}
    </select>
}