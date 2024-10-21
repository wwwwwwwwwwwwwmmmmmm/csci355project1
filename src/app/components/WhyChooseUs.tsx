import styles from "./WhyChooseUs.module.css"


export default function WhyChooseUs() {
    return (
        <div className={styles.whyChooseUs}>
            <h2>Why Choose Us?</h2>
            <div className={styles.iconsGrid}>
                <div className="icon-item">
                    <i className="fas fa-briefcase"/>
                    <p>10+ Years of Experience</p>
                </div>
                <div className={styles.iconItem}>
                    <i className="fas fa-user"/>
                    <p>200+ Professional Chefs</p>
                </div>
                <div className={styles.iconItem}>
                    <i className="fas fa-users"/>
                    <p>5000+ Happy Customers</p>
                </div>
                <div className={styles.iconItem}>
                    <i className="fas fa-trophy"/>
                    <p>20+ Awards Won</p>
                </div>
            </div>
        </div>
    )
}