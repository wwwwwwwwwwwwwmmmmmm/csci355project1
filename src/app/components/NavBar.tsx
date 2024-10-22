import logo from "../assets/images/logo.png"
import zen from "../assets/images/Zen.png"
import Image from "next/image";
import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <div className={styles.nav}>
            <div className={styles.imageContainer}>
                <Image src={logo.src}
                       alt="Left Image"
                       width={360}
                       height={360}
                       style={{height: 50, width: "auto", borderRadius: 10}} // TODO overflow
                />
                <Image src={zen.src}
                       alt="Zen Bites Logo"
                       width={663}
                       height={178}
                       style={{height: 50, width: "auto", borderRadius: 10, marginLeft: 10}}
                />
            </div>
            <nav>
                <ul className={styles.navbar}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/contact" className={styles.buttonContact}>Contact Now</a></li>
                </ul>
            </nav>
        </div>
    )
}