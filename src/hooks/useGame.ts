import {useState} from "react";
import {Player} from "../types";

export interface Game {
    turnsTaken: () => Player[][];
    jumpTo: (turnNumber: number) => void;
    playerInTurn: () => Player;
    takeTurn: (r: number, c: number) => void;
    turnCount: () => number;
    winner: () => Player;
}

export function useGame(size: number = 3): Game {
    if (size < 1) {
        throw new Error("Size must be > 0.");
    }
    if (size % 2 === 0) {
        throw new Error("Size must be uneven.")
    }
    const [turnsTakenHistory, setTurnsTakenHistory] = useState<Player[][][]>([Array.from({length: size}, (): Player[] => Array(size).fill(null))]);
    const [historyIndex, setHistoryIndex] = useState<number>(0);
    const turnsTaken: Player[][] = turnsTakenHistory[historyIndex];
    const playerInTurn: Player = historyIndex % 2 === 0 ? "X" : "O";

    function takeTurn(r: number, c: number): void {
        if (winner() || turnsTaken[r][c]) {
            return;
        }
        const nextTurnsTaken: Player[][] = turnsTaken.map((row: Player[], _r: number): Player[] => {
            if (_r === r) {
                return row.map((value: Player, _c: number): Player => {
                    if (_c === c) {
                        return playerInTurn;
                    }
                    return value;
                });
            }
            return row;
        });
        const nextHistory: Player[][][] = [...turnsTakenHistory.slice(0, historyIndex + 1), nextTurnsTaken];
        setTurnsTakenHistory(nextHistory);
        setHistoryIndex(nextHistory.length - 1);
    }

    function winner(): Player {
        const size: number = turnsTaken.length;
        for (let i: number = 0; i < size; i++) {
            // Horizontal
            if (turnsTaken[i][0] && turnsTaken[i].every((value: Player): boolean => value === turnsTaken[i][0])) {
                return turnsTaken[i][0];
            }
            // Vertical
            if (turnsTaken[0][i] && turnsTaken.every((row: Player[]): boolean => row[i] === turnsTaken[0][i])) {
                return turnsTaken[0][i];
            }
        }
        // Diagonal
        let firstValue: Player = turnsTaken[0][0];
        if (firstValue) {
            for (let i: number = 0; i + 1 < size; i++) {
                if (firstValue !== turnsTaken[i + 1][i + 1]) {
                    break;
                }
                if (i + 2 === size) {
                    return firstValue;
                }
            }
        }
        firstValue = turnsTaken[size - 1][0];
        if (firstValue) {
            for (let i: number = size - 1; i > 0; i--) {
                if (firstValue !== turnsTaken[i - 1][size - i]) {
                    break;
                }
                if (i - 1 === 0) {
                    return firstValue;
                }
            }
        }
        return null;
    }

    return {
        turnsTaken(): Player[][] {
            return turnsTaken;
        },
        jumpTo(historyIndex: number): void {
            setHistoryIndex(historyIndex);
        },
        playerInTurn(): Player {
            return playerInTurn;
        },
        takeTurn,
        turnCount(): number {
            return turnsTakenHistory.length;
        },
        winner
    }
}