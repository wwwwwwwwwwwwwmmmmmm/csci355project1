import styles from "./ContactUs.module.css"

export default function ContactUs() {
    return (
        <section className={styles.introSection}>
            <h1>Contact Us</h1>
            <p>We would love to hear from you! Feel free to reach out using the form below.</p>

            <div className={styles.contactForm}>
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Email"/>
                <textarea rows={5} placeholder="Your Message"></textarea>

                <p>Preferred Contact Method:</p>
                <label><input type="radio" name="contact-method" value="email"/> Email</label>
                <label><input type="radio" name="contact-method" value="phone"/> Phone</label>

                <p>Services Interested In:</p>
                <label><input type="checkbox" name="service" value="catering"/> Catering</label>
                <label><input type="checkbox" name="service" value="event"/> Event Planning</label>
                <label><input type="checkbox" name="service" value="reservation"/> Table Reservation</label>

                <button type="submit">Submit</button>
            </div>
        </section>
    )
}