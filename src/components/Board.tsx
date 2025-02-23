import React, {JSX} from "react";
import {Player} from "../types";
import Field from "./Field";

interface Props {
    turnsTaken: Player[][];
    takeTurn: (row: number, col: number) => void;
}

function Board({turnsTaken, takeTurn}: Props): JSX.Element {
    return (
        <>
            {
                turnsTaken.map((row: Player[], r: number): JSX.Element => {
                    return (
                        <div key={r}>
                            {
                                row.map((turnTaken: Player, c: number): JSX.Element => {
                                    return (
                                        <Field value={turnTaken} key={c} handleSelection={(): void => takeTurn(r, c)}/>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </>
    )
}

export default Board;