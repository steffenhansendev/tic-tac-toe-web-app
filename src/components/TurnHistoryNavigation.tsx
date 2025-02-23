import React, {JSX} from "react";

interface Props {
    turnCount: number;
    handleTurnSelection: (index: number) => void;
}

function TurnHistoryNavigation({turnCount, handleTurnSelection}: Props): JSX.Element {
    const navigationButtons: JSX.Element[] = Array.from({length: turnCount}, (_, i: number) => {
            const actionPrompt: string = i > 0 ? "Go to move #" + i : "Go to game start";
            return (
                <li key={i}>
                    <button onClick={() => handleTurnSelection(i)}>{actionPrompt}</button>
                </li>
            );
        }
    );
    return (
        <div>
            <ol>{navigationButtons}</ol>
        </div>
    );
}

export default TurnHistoryNavigation;