import styles from "../styles/home.module.css";

export function Proffesion({ profession }: { profession: string }) {
    return (
        <>
            <section className={styles.profession}>
                <p>{profession}</p>
            </section>
        </>
    );
}
