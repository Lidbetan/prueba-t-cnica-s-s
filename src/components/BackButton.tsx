import Link from "next/link";
import userStyles from "../styles/users.module.css";
import HomeIcon from "./icons/homeIcon";

export default function BackButton() {
    return (
        <>
            <button className={userStyles.backBtn}>
                <Link href="/">
                    <HomeIcon width={40} height={40} fillColor="gray" />
                </Link>
            </button>
        </>
    );
}
