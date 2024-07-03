"use client";
import Image from "next/image";
import styles from "../styles/home.module.css";

export function Header({
    userName,
    userImg,
}: {
    userName: string;
    userImg: string;
}) {
    return (
        <>
            <header>
                <div className={styles.header}>
                    <Image
                        src={userImg}
                        alt="user profile image"
                        width={120}
                        height={120}
                        className={styles.images}
                    />
                    <h1>{userName}</h1>
                </div>
            </header>
        </>
    );
}
