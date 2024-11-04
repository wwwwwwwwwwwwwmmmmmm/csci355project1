import styles from "./ContactDetails.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

export default function ContactDetails() {
    return (
        <section className={styles.contactDetails}>
            <h2>Contact Information</h2>
            <p><FontAwesomeIcon icon={faPhoneAlt} size="1x"/> 📱 777-777-7777</p>
            <p><FontAwesomeIcon icon={faEnvelope} size="1x"/>✉️ ZenBites@Donotemail.com</p>
        </section>
    )
}