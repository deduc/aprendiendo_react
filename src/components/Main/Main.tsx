import "./Main.css";
import { ButtonLoader } from "./../ButtonLoader/ButtonLoader";

export function Main() {
    return (
        <>
            <main className="main">
                <h1>Main</h1>

                <section>
                    <article>
                        <p>Botón clicable + animación</p>
                        <ButtonLoader ></ButtonLoader>
                    </article>
                    <article>
                        <p>hola</p>
                    </article>
                </section>
            </main>
        </>
    )
}
