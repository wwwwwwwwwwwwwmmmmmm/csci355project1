import styles from "./ContactDetails.module.css"

export default function ContactDetails() {
    return (
        <section className={styles.contactDetails}>
            <h2>Contact Information</h2>
            <p><i className="fas fa-phone-alt"></i> 📱 777-777-7777</p>
            <p><i className="fas fa-envelope"></i> ✉️ ZenBites@Donotemail.com</p>
        </section>
    )
}