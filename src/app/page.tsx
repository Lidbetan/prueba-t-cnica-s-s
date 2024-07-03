import styles from "../styles/home.module.css";
import { About } from "@/components/About";
import { Interests } from "@/components/Interests";
import { ContactForm } from "@/components/ContactForm";

import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
    // console.log(users);
    // console.log(users[0]);
    return (
        <>
            {/* <Navbar /> */}
            <main className={styles.main}>
                <h1>Bienvenido, elija un usuario</h1>
                <Link href="http://localhost:3000/users/1">Usuario 1</Link>
                <Link href="http://localhost:3000/users/2">Usuario 2</Link>
                <Link href="http://localhost:3000/users/3">Usuario 3</Link>
                <Link href="http://localhost:3000/users/4">Usuario 4</Link>
            </main>
        </>
    );
}
