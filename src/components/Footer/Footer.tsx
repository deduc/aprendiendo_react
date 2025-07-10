import "./Footer.css";

export function Footer() {
    return (
        <>
            <footer>
                <h1>Footer</h1>

                <hr />

                <section className="footer-comandos">
                    <h2>Comandos</h2>
                    <article>
                        <p>Crear proyecto</p>
                        <code>npm create vite@latest mi-app-react</code>
                    </article>

                    <article>
                        <p>Ejecutar proyecto en desarrollo</p>
                        <code>npm run dev</code>
                    </article>
                </section>
            </footer>
        </>
    )
}
