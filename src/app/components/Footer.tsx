import styles from "./Footer.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebookSquare,
    faGooglePlusSquare,
    faInstagramSquare,
    faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h3>Popular Pages</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Chefs</a></li>
                        <li><a href="#">Our Blog</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Popular Categories</h3>
                    <ul>
                        <li><a href="#">Sushi</a></li>
                        <li><a href="#">Dim Sum</a></li>
                        <li><a href="#">Ramen</a></li>
                        <li><a href="#">Teriyaki</a></li>
                        <li><a href="#">Kimchi</a></li>
                        <li><a href="#">Matcha Desserts</a></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Reach Us</h3>
                    <p>📱 777-777-7777</p>
                    <p>📱 777-777-7777</p>
                    <p>✉️ ZenBites@Donotemail.com</p>
                    <p>🌐 www.ZenBites.com</p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Connect With Us</h3>
                    <div className={styles.socialIcons}>
                        <a href="#"><FontAwesomeIcon icon={faFacebookSquare} size="1x"/></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitterSquare} size="1x"/></a>
                        <a href="#"><FontAwesomeIcon icon={faGooglePlusSquare} size="1x"/></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagramSquare} size="1x"/></a>
                    </div>
                </div>
                
                <div className={styles.footerSection}>
                    <h3 style={{color: 'red'}}>Group Members</h3>
                    <ul>
                        <li>William Mah</li>
                        <li>Orrin S Anderson III</li>
                        <li>Rahnuma Mostafa</li>
                        <li>Bertram Huang</li>
                        <li>Abdullah Sabbir</li>
                        <li>Saibyasachi, Ruhan</li>
                    </ul>
                </div>
    
            </div>
            <footer className={`${styles.bottomFooter} bg-black shadow dark:bg-black text-center`}>
                <div className={styles.bottomFooterContainer}>
                    <span className={`${styles.footerText} dark:text-gray-400`}>
                        © 2024 Zen Bites. All Rights Reserved.
                    </span>
                    <div className={`${styles.footerLinks} dark:text-gray-400`}>
                        <div className={styles.footerLink}>
                            Terms of Service
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
