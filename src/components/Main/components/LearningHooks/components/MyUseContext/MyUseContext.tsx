import { useContext } from "react"
import { MyGlobalAppContext, type MyCustomContext } from "../../../../../../context/MyGlobalAppContext"

export function MyUseContext() {
    const myAppContext: MyCustomContext = useContext(MyGlobalAppContext)

    const codeStr: string = `<MyGlobalAppContext value={
           {
               ...myAppContextValues,
               setContextValues: (newValues) => setContextValues((prev) => ({ ...prev, ...newValues }))
           }
        }>
            - componentes hijos que podrán acceder y manipular el contexto
        </MyGlobalAppContext>`;

    return (
        <>
            <section className="MyUseContextContainer">
                <ul className="ulMargin">
                    <li>Crear contexto llamado GlobalAppContext con el hook createContext() en fichero externo</li>
                    <li>Recoger el contexto (en este componente) con el hook useContext()</li>
                    <li>El contexto solo será accesible para los componentes que sean englobados por el siguiente codigo:</li>
                    <div>
                        <pre><code>{codeStr}</code></pre>
                    </div>
                    <br />
                    <li>Datos del contexto:</li>
                    <ul className="ulMargin">
                        <li>"nombreProgramador": <b>"{myAppContext.nombreProgramador}"</b></li>
                        <li>"webAppProyect": <b>"{myAppContext.webAppProyect}"</b></li>
                    </ul>
                </ul>
            </section>
        </>
    )
}