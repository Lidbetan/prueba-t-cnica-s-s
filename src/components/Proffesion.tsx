import userStyles from "../styles/users.module.css";

export function Proffesion({ profession }: { profession: string }) {
    return (
        <>
            <section className={userStyles.profession}>
                <p>{profession}</p>
            </section>
        </>
    );
}
