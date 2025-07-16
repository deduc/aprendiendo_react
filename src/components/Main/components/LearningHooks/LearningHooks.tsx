import { useContext, useState } from "react";
import { MyGlobalAppContext, type MyCustomContext } from "../../../../context/MyGlobalAppContext";
import "./LearningHooks.css"
import { ChangeContextValues } from "./components/ChangeContextValues/ChangeContextValues";
import { MyUseContext } from "./components/MyUseContext/MyUseContext";
import { NumberCounter } from './components/NumberCounter/NumberCounter';

export function LearningHooks() {
    const myAppContext: MyCustomContext = useContext(MyGlobalAppContext)

    const [myAppContextValues, setContextValues] = useState({
        nombreProgramador: myAppContext.nombreProgramador,
        webAppProyect: myAppContext.webAppProyect,
    });

    return (
        <>
            <section style={{ border: "1px solid black" }}>
                <h1>Aprendiendo Hooks</h1>
                <article>
                    <NumberCounter></NumberCounter>
                </article>
                <article>
                    <h2>Crear contexto para almacenar datos</h2>
                    <br />
                    <MyGlobalAppContext value={
                        {
                            ...myAppContextValues,
                            setContextValues: (newValues) => setContextValues((prev) => ({ ...prev, ...newValues }))
                        }
                    }>
                        <div className="dFlex-Row flex-wrap">
                            <MyUseContext></MyUseContext>
                            <ChangeContextValues></ChangeContextValues>
                        </div>
                    </MyGlobalAppContext>
                </article>
            </section>
        </>
    )
}