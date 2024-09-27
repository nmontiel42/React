import { Square } from "./Square"

export function WinnerModal ({ winner, resetGame } ) {
    if (winner === null) return null

    const winnerText = winner === false ? 'There is a tie :(' : 'The winner is: '

    return (
        <section className="winner">
            <div className="text">
            <h2>{winnerText} </h2>
            
            <header className="win">
                {winner && <Square>{winner}</Square>}
            </header>

            <footer className="again">
                <button onClick={resetGame}>Start over</button>
            </footer>
            </div>
        </section>
    )
}