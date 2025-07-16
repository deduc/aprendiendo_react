import "./TicTacToe.css";

export function TicTacToe() {
    function onDragStart(event: any) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }

    function onDragOverHandler(event: any) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }

    function dropHandler(event: any) {
        console.log(event);
        event.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = event.dataTransfer.getData("text/plain");
        event.target.appendChild(document.getElementById(data));

    }

    return (
        <>
            <section className="ticTacToe">
                <h1>Juego 3 en raya</h1>

                <section className="gameContainer">
                    <article className="piecesContainer">
                        <div id="pieceX0" className="pieceX" draggable="true" onDragStart={onDragStart}>X</div>
                        <div id="pieceX1" className="pieceX" draggable="true" onDragStart={onDragStart}>X</div>
                        <div id="pieceX2" className="pieceX" draggable="true" onDragStart={onDragStart}>X</div>
                    </article>
                    <article>
                        <table>
                            <tbody>
                                <tr>
                                    <td id="cell00" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                    <td id="cell01" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                    <td id="cell02" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                </tr>
                                <tr>
                                    <td id="cell10" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                    <td id="cell11" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                    <td id="cell12" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                </tr>
                                <tr>
                                    <td id="cell20" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                    <td id="cell21" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                    <td id="cell22" onDragOver={onDragOverHandler} onDrop={dropHandler}></td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article className="piecesContainer">
                        <div id="pieceO0" className="pieceO" draggable="true" onDragStart={onDragStart}>O</div>
                        <div id="pieceO1" className="pieceO" draggable="true" onDragStart={onDragStart}>O</div>
                        <div id="pieceO2" className="pieceO" draggable="true" onDragStart={onDragStart}>O</div>
                    </article>
                </section>
            </section>
        </>
    );
}