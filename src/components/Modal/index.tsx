import React, {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {Close, ModalBody, Wrapper} from "@/components/Modal/styles.ts";

const modalElement = document.getElementById("modal")!;

interface Props {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode
}

export const Modal: React.FC<Props> = ({open, onClose, children}) => {
    const element = useRef<HTMLDivElement>(document.createElement("div"));

    useEffect(() => {
        modalElement.appendChild(element.current);
        const el = element.current;
        return () => {
            modalElement.removeChild(el)
        };
    }, [element])

    return createPortal(open && (
        <Wrapper onClick={onClose}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                <Close onClick={onClose}>X</Close>
                <div>{children}</div>
            </ModalBody>
        </Wrapper>
    ), modalElement);
}