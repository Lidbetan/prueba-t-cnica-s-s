import userStyles from "../styles/users.module.css";

export function About({ about }: { about: string }) {
    return (
        <>
            <section className={userStyles.about}>
                <p>{about}</p>
            </section>
        </>
    );
}
