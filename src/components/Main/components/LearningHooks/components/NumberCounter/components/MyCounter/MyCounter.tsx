export function MyCounter({ counter }: { counter: number}) {

    return (
        <>
            <p style={{ fontSize: "32px" }}>
                {counter}
            </p>
        </>
    )
}