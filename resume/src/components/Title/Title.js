import React from "react";
import styles from "./style";

const Title = ({ titleName }) => {

    return (
        <div style={styles.MainContainer}>
            <span
                style={styles.Title
                }
            >
                {titleName}
            </span>
        </div>
    )
}

export default Title;