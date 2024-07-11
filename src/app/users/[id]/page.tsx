import userStyles from "../../../styles/users.module.css";
import { About } from "@/components/About";
import { Hobbies } from "@/components/Hobbies";
import { ContactForm } from "@/components/ContactForm";
import usersProfiles from "../../../data/usersProfiles.json";
import { IUser } from "@/interfaces/user.interface";
import { Header } from "@/components/Header";
import BackButton from "@/components/BackButton";
import { Proffesion } from "@/components/Proffesion";
import { Location } from "@/components/Location";

//Se renderizan los usuarios y su información de forma dinámica obteniendo el número de usuario a través de url params
export default function UserInfo({ params }: { params: { id: number } }) {
    const { users }: { users: IUser[] } = usersProfiles;
    const userIndex = params.id - 1;
    return (
        <>
            <main className={userStyles.userMain}>
                {users && (
                    <>
                        <Header
                            userFirstName={users[userIndex].firstName}
                            userLastName={users[userIndex].lastName}
                            userImg={users[userIndex].userImg}
                        />
                        <div className={userStyles.profAndLoc}>
                            <Proffesion
                                profession={users[userIndex].profession}
                            />
                            <Location location={users[userIndex].location} />
                        </div>

                        <About about={users[userIndex].about} />
                        <Hobbies hobbies={users[userIndex].hobbies} />
                        <BackButton />
                    </>
                )}
                <ContactForm userFirstName={users[userIndex].firstName} />
            </main>
        </>
    );
}
