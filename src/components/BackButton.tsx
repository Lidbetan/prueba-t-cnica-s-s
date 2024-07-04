import Link from "next/link";
import userStyles from "../styles/users.module.css";

export default function BackButton() {
    return (
        <>
            <button className={userStyles.backBtn}>
                <Link href="/">BACK</Link>
            </button>
        </>
    );
}
