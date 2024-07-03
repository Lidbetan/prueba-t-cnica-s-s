import styles from "../../../styles/home.module.css";
import { About } from "@/components/About";
import { Interests } from "@/components/Interests";
import { ContactForm } from "@/components/ContactForm";
import usersProfiles from "../../../data/usersProfiles.json";
import { IUser } from "@/interfaces/user.interface";
import { Header } from "@/components/Header";
import BackButton from "@/components/BackButton";

export default function User({ params }: { params: { id: number } }) {
    const { users }: { users: IUser[] } = usersProfiles;
    const userIndex = params.id - 1;
    return (
        <>
            <main className={styles.main}>
                {users && (
                    <>
                        <Header
                            userName={users[userIndex].name}
                            userImg={users[userIndex].userImg}
                        />
                        <About about={users[userIndex].about} />
                        <Interests interests={users[userIndex].interests} />
                        <BackButton />
                    </>
                )}
                <ContactForm />
            </main>
        </>
    );
}
