import "./Main.css";
import { ButtonLoader } from "./components/ButtonLoader/ButtonLoader";
import { TicTacToe } from "./components/TicTacToe/TicTacToe";
import { ApiCalls } from "./components/ApiCalls/ApiCalls";
import { LearningHooks } from "./components/LearningHooks/LearningHooks"

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
                    <article>
                        <LearningHooks></LearningHooks>
                    </article>
                </section>
            </main>
        </>
    )
}
