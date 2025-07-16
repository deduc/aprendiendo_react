import type { MyButtonData } from "../../LearningHooks";

export function MyButton(props: MyButtonData) {
    return (
        <>
            <button className="CounterBtn" onClick={props.action}>{props.text}</button>
        </>
    )
}