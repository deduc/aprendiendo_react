import type { MyButtonData } from "../../NumberCounter";

export function MyButton(props: MyButtonData) {
    return (
        <>
            <button className="CounterBtn" onClick={props.action}>{props.text}</button>
        </>
    )
}