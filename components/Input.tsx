interface IProps {
    placeholder: string, 
    value: string,
    set: Function
}

const Input = (props: IProps) => {
    return (
        <input placeholder={props.placeholder} value={props.value} onChange={(e) => props.set(e.target.value)}
        className="input" />
        
    );
}

export default Input;