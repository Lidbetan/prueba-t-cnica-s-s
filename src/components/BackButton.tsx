import Link from "next/link";
import styles from "../styles/home.module.css";

export default function BackButton() {
    return (
        <>
            <button className={styles.backBtn}>
                <Link href="/">BACK</Link>
            </button>
        </>
    );
}
