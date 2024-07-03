"use client";
import styles from "../styles/home.module.css";

export function About({ about }: { about: string }) {
    console.log(about);
    return (
        <>
            <section>
                <h2>Sobre mí:</h2>
                <p>{about}</p>
            </section>
        </>
    );
}
