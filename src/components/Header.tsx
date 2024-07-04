import Image from "next/image";
import userStyles from "../styles/users.module.css";
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
                <div className={userStyles.header}>
                    <Image
                        src={userImg}
                        alt="user profile image"
                        width={120}
                        height={120}
                        className={userStyles.images}
                    />
                    <h2 className={userStyles.pageH1}>{completeName}</h2>
                </div>
            </header>
        </>
    );
}
