import styles from "../styles/home.module.css";

export function Hobbies({ hobbies }: { hobbies: string[] }) {
    return (
        <>
            <section className={styles.hobbies}>
                {hobbies.map((hobbie, index) => {
                    return <span key={index}>{hobbie}</span>;
                })}
            </section>
        </>
    );
}
