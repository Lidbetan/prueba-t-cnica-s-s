"use client";
import styles from "../styles/home.module.css";

export function About({ about }: { about: string }) {
    return (
        <>
            <section className={styles.about}>
                <p>{about}</p>
            </section>
        </>
    );
}
