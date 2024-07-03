"use client";
import styles from "../styles/home.module.css";

export function Navbar() {
    return (
        <>
            <nav>
                <div className={styles.header}>
                    <ul>
                        <li>Usuario 1</li>
                        <li>Usuario 2</li>
                        <li>Usuario 3</li>
                        <li>Usuario 4</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
