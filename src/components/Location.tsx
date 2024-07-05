import LocationIcon from "@/app/icons/locationIcon";
import userStyles from "../styles/users.module.css";

export function Location({ location }: { location: string }) {
    return (
        <>
            <section className={userStyles.location}>
                <span>
                    <LocationIcon width={20} height={20} fillColor="gray" />
                </span>
                <span>{location}</span>
            </section>
        </>
    );
}
