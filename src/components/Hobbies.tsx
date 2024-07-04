import userStyles from "../styles/users.module.css";

export function Hobbies({ hobbies }: { hobbies: string[] }) {
    return (
        <>
            <section className={userStyles.hobbies}>
                {hobbies.map((hobbie, index) => {
                    return <span key={index}>{hobbie}</span>;
                })}
            </section>
        </>
    );
}
