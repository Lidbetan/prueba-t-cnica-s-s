import Image from "next/image";
import styles from "../styles/home.module.css";

export function Header({
    userFirstName,
    userLastName,
    userImg,
}: {
    userFirstName: string;
    userLastName: string;
    userImg: string;
}) {
    const completeName = `${userFirstName} ${userLastName}`;
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
                    <h1>{completeName}</h1>
                </div>
            </header>
        </>
    );
}
