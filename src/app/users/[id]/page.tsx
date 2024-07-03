import styles from "../../../styles/home.module.css";
import { About } from "@/components/About";
import { Hobbies } from "@/components/Hobbies";
import { ContactForm } from "@/components/ContactForm";
import usersProfiles from "../../../data/usersProfiles.json";
import { IUser } from "@/interfaces/user.interface";
import { Header } from "@/components/Header";
import BackButton from "@/components/BackButton";
import { Proffesion } from "@/components/Proffesion";

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
                        <Proffesion profession={users[userIndex].profession} />
                        <About about={users[userIndex].about} />
                        <Hobbies hobbies={users[userIndex].hobbies} />
                        {/* <BackButton /> */}
                    </>
                )}
                <ContactForm />
            </main>
        </>
    );
}
