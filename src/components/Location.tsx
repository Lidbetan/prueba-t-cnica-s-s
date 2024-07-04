import userStyles from "../styles/users.module.css";

export function Location({ location }: { location: string }) {
    return (
        <>
            <section className={userStyles.location}>
                <span>🌎</span>
                <span>{location}</span>
            </section>
        </>
    );
}
