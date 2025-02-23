import React, {JSX} from "react";
import {Player} from "../types";

interface Props {
    playerInTurn: Player;
    winner: Player;
}

function Status({winner, playerInTurn}: Props): JSX.Element {
    const status: string = (winner) ? "Winner: " + winner : "Player in turn: " + playerInTurn;
    return <p>{status}</p>
}

export default Status;