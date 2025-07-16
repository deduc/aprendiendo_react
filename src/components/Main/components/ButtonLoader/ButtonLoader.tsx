import { useState } from "react";
import "./ButtonLoader.css";

export function ButtonLoader() {
    const [spinnerPlayState, setSpinnerPlayState] = useState(false)
    const [buttonText, setButtonText] = useState("Play")
    

    const swapSpinnerPlayState = () => {
        setSpinnerPlayState(!spinnerPlayState)
        if (buttonText == "Play")
            setButtonText("Playing")
        else setButtonText("Play")
    }

    return (
        <>
            <article onClick={swapSpinnerPlayState} className="button-loader-container">
                <button>{buttonText}</button>
                <div className={spinnerPlayState ? "outline spinner spinner-play" : "outline spinner"}></div>
            </article>
        </>
    );
}
