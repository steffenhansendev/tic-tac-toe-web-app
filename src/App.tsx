import React, {JSX} from "react";
import "./styles.css";
import styles from "./styles.module.css";

function App(): JSX.Element {
    return (<p className={`${styles.textAlignCenter} monospace`}>Web App</p>);
}

export default App;