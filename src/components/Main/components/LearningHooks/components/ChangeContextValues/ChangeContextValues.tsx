import { useContext, useState } from "react"
import { MyGlobalAppContext, type MyCustomContext } from "../../../../../../context/MyGlobalAppContext"

export function ChangeContextValues() {
    const myAppContext: MyCustomContext = useContext(MyGlobalAppContext)
    const [name, setName] = useState("")
    const [webApp, setWebApp] = useState("")

    function setNombreProgramador() {
        myAppContext.setContextValues({ nombreProgramador: name })
    }

    function setWebAppProyect() {
        myAppContext.setContextValues({ webAppProyect: webApp })
    }
    
    return (
        <>
            <section className="MyUseContextContainer">
                <h2>Modificar los datos del context</h2>
                <article>
                    <label>
                        <span>nombreProgramador</span>
                        <br />
                        <input type="text" placeholder="nombreProgramador" onChange={(event: any) => { setName(event.target.value) }} />
                        <button onClick={setNombreProgramador}>Cambiar</button>
                    </label>
                    <br />
                    <br />
                    <label>
                        <span>webAppProyect</span>
                        <br />
                        <input type="text" placeholder="webAppProyect" onChange={(event: any) => { setWebApp(event.target.value) }} />
                        <button onClick={setWebAppProyect}>Cambiar</button>
                    </label>
                </article>
            </section>
        </>
    )
}