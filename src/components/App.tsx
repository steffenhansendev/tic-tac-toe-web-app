import React, {JSX} from "react";
import {Game, useGame} from "../hooks/useGame";
import Board from "./Board";
import Status from "./Status";
import TurnHistoryNavigation from "./TurnHistoryNavigation";
import styles from "../styles.module.css";

function App(): JSX.Element {
    const game: Game = useGame();
    return (
        <div className={styles.game}>
            <Status playerInTurn={game.playerInTurn()} winner={game.winner()}/>
            <Board turnsTaken={game.turnsTaken()} takeTurn={game.takeTurn}/>
            <TurnHistoryNavigation turnCount={game.turnCount()} handleTurnSelection={game.jumpTo}/>
        </div>
    );
}

export default App;