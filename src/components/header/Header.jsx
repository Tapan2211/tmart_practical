import React from "react";
import styles from './Header.module.css';

function Header({ title, subTitle }) {
    return (
        <div className={styles.main}>
            {title && <h1>{title}</h1>}
            {subTitle && <p>{subTitle}</p>}
        </div>
    )
}

export default Header;