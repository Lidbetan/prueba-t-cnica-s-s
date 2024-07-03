import styles from "../styles/home.module.css";
import { About } from "@/components/About";
import { Interests } from "@/components/Interests";
import { ContactForm } from "@/components/ContactForm";

import { Navbar } from "@/components/Navbar";

export default function Home() {
    // console.log(users);
    // console.log(users[0]);
    return (
        <>
            {/* <Navbar /> */}
            <main className={styles.main}>
                <h1>Bienvenido, elija un usuario</h1>
            </main>
        </>
    );
}
