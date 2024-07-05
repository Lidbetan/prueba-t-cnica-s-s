import Link from "next/link";
import styles from "../styles/home.module.css";
import Image from "next/image";
import { IUser } from "@/interfaces/user.interface";
import usersProfiles from "../data/usersProfiles.json";

export function User({ id }: { id: number }) {
    const { users }: { users: IUser[] } = usersProfiles;
    //Obtiene el user que coincide con el id que se le pasa como argumento
    const getImg = users.filter((user) => user.userId === id);
    return (
        <>
            <Link href={`http://localhost:3000/users/${id}`}>
                <Image
                    src={getImg[0].userImg}
                    alt="user profile image"
                    width={120}
                    height={120}
                    className={styles.imagesHome}
                />
            </Link>
        </>
    );
}
