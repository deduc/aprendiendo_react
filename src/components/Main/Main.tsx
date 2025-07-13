import "./Main.css";
import { ButtonLoader } from "./../ButtonLoader/ButtonLoader";
import { TicTacToe } from "./../TicTacToe/TicTacToe";
import { ApiCalls } from "./../ApiCalls/ApiCalls";

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
                        <TicTacToe></TicTacToe>
                    </article>
                    <article>
                        <ApiCalls></ApiCalls>
                    </article>
                </section>
            </main>
        </>
    )
}
