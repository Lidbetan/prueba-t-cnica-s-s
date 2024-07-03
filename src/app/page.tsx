import styles from "../styles/home.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1>
                    Bienvenido, elija un <span>usuario</span>
                </h1>
                <Link href="http://localhost:3000/users/1">
                    <Image
                        src="/mid-age-woman.png"
                        alt="user profile image"
                        width={120}
                        height={120}
                        className={styles.images}
                    />
                </Link>
                <Link href="http://localhost:3000/users/2">
                    <Image
                        src="/mid-age-man.png"
                        alt="user profile image"
                        width={120}
                        height={120}
                        className={styles.images}
                    />
                </Link>
                <Link href="http://localhost:3000/users/3">
                    <Image
                        src="/young-woman.png"
                        alt="user profile image"
                        width={120}
                        height={120}
                        className={styles.images}
                    />
                </Link>
                <Link href="http://localhost:3000/users/4">
                    <Image
                        src="/young-man.png"
                        alt="user profile image"
                        width={120}
                        height={120}
                        className={styles.images}
                    />
                </Link>
            </main>
        </>
    );
}
