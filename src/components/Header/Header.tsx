import "./Header.css";

export function Header() {
    return (
        <>
            <header>
                <h1>Header</h1>
                <h2>Aprendiendo React</h2>

                <p>Por y para programadores</p>

                <article className="aligned-buttons">
                    <button>Login</button>
                    <button>Registrar</button>
                </article>
            </header>
        </>
    )
}
