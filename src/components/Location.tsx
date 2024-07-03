import styles from "../styles/home.module.css";

export function Location({ location }: { location: string }) {
    return (
        <>
            <section className={styles.location}>
                <span>🌎</span>
                <span>{location}</span>
            </section>
        </>
    );
}
