import { useState } from "react"
import { MyButton } from "./components/MyButton/MyButton"
import { MyCounter } from "./components/MyCounter/MyCounter"
export interface MyButtonData {
    action: () => void
    text: string
}

export function NumberCounter() {
    let [contador, setcontador] = useState(0)

    const addBtn: MyButtonData = {
        action: () => { setcontador(contador + 1) },
        text: "Sumar"
    }

    const subBtn: MyButtonData = {
        action: () => { setcontador(contador - 1) },
        text: "Restar"
    }

    return (
        <>
            <h2>Pasar datos padre-hijos - useState()</h2>
            <section className="counterContainer">

                <div>
                    <h3>Contador de números</h3>
                    <div className="MyflexRow">
                        <article>
                            <h4>Componente boton</h4>
                            <MyButton {...addBtn}></MyButton>
                            <MyButton {...subBtn}></MyButton>
                        </article>
                        <article>
                            <h4>Componente contador</h4>
                            <MyCounter counter={contador}></MyCounter>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}