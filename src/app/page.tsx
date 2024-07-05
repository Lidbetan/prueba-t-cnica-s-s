import styles from "../styles/home.module.css";
import { User } from "@/components/User";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.bgDiv}>
                    <h1>
                        Bienvenido, elige&nbsp;un&nbsp;<span>usuario</span>
                    </h1>
                </div>
                <div className={styles.usersContainer}>
                    <User id={1} />
                    <User id={2} />
                    <User id={3} />
                    <User id={4} />
                </div>
            </main>
        </>
    );
}
