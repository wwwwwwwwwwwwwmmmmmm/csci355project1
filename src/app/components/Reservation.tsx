import styles from "./Reservation.module.css"

export default function Reservation() {
    return (
        <div className={styles.reservationContainer}>
            <h2>Book a Table:</h2>
            <form>
                <input type="date" placeholder="Pick your date"/>
                <select>
                    <option>Select Time</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                </select>
                <select>
                    <option>Select People</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                </select>
                <button type="button" className={styles.buttonBookNow}>Book Now</button>
            </form>
        </div>
    )
}