import styles from "./OurLocations.module.css"

export default function OurLocations() {
    return (
        <section className={styles.tableSection}>
            <h2>Our Locations</h2>
            <table className={styles.locationTable}>
                <tbody>
                <tr>
                    <th className={styles.locationTh}>City</th>
                    <th className={styles.locationTh}>Phone</th>
                    <th className={styles.locationTh}>Hours (Sun - Sat)</th>
                </tr>
                <tr>
                    <td className={styles.locationTd}>New York</td>
                    <td className={styles.locationTd}>+1 555 555 5555</td>
                    <td className={styles.locationTd}>Sun-Thu: 9 AM - 9 PM <br/> Fri-Sat: 9 AM - 11 PM</td>
                </tr>
                <tr>
                    <td className={styles.locationTd}>Los Angeles</td>
                    <td className={styles.locationTd}>+1 444 444 4444</td>
                    <td className={styles.locationTd}>Mon-Fri: 10 AM - 10 PM <br/> Sat-Sun: 10 AM - 12 AM</td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}