"use client";
import styles from "../styles/home.module.css";

export function Interests({ interests }: { interests: string[] }) {
    return (
        <>
            <section>
                <h2>Interéses</h2>
                {interests.map((interest, index) => {
                    return <p key={index}>{interest}</p>;
                })}
            </section>
        </>
    );
}
