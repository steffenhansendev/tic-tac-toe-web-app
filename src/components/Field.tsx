import React from "react";
import {JSX} from "react";
import {Player} from "../types";
import styles from "../styles.module.css";

interface Props {
    value: Player;
    handleSelection: () => void;
}

function Field({value, handleSelection}: Props): JSX.Element {
    return <button onClick={handleSelection} disabled={!!value} className={styles.field}>{value}</button>;
}

export default Field;