import styles from "./WhyChooseUs.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faTrophy, faUser, faUsers} from "@fortawesome/free-solid-svg-icons";


export default function WhyChooseUs() {
    return (
        <div className={styles.whyChooseUs}>
            <h2>Why Choose Us?</h2>
            <div className={styles.iconsGrid}>
                <div className={styles.iconItem}>
                    <FontAwesomeIcon icon={faBriefcase}/>
                    <p>10+ Years of Experience</p>
                </div>
                <div className={styles.iconItem}>
                    <FontAwesomeIcon icon={faUser}/>
                    <p>200+ Professional Chefs</p>
                </div>
                <div className={styles.iconItem}>
                    <FontAwesomeIcon icon={faUsers}/>
                    <p>5000+ Happy Customers</p>
                </div>
                <div className={styles.iconItem}>
                    <FontAwesomeIcon icon={faTrophy}/>
                    <p>20+ Awards Won</p>
                </div>
            </div>
        </div>
    )
}