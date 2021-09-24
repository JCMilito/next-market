import { FocusEventHandler } from "react";

interface IProps {
    placeholder: string,
    value: string,
    set: Function
}

const Input = (props: IProps) => {

    const replaceComas = (e: any) => {
        e.target.value = e.target.value.replace(',', '.');
        console.log("Yo");
    }
    return (
        <input placeholder={props.placeholder} value={props.value} onChange={(e) => props.set(e.target.value)}
            className="input" />
    )
}

export default Input;