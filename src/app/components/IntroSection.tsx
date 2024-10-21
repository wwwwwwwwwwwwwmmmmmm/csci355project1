import Image from "next/image";
import clock from "@/app/assets/images/clock.png";
import house from "@/app/assets/images/house.png";
import car from "@/app/assets/images/car.png";

import styles from "./IntroSection.module.css"

export default function IntroSection() {
    return (
        <section className={styles.introSection}>
            <h1>Organic Foods Made <br/> Easy &amp; Healthy</h1>
            <div className="searchContainer">
                <input type="text" placeholder="Search your food here"/>
                <button type="button">Search</button>
            </div>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <Image src={clock.src}
                           alt="24/7 Fresh Food"
                           width={clock.width}
                           height={clock.height}
                           style={{width: '50px', height: '50px', display: "inline-block"}}
                    />
                    <p>24/7 Fresh Food</p>
                </div>
                <div className={styles.feature}>
                    <Image src={house.src}
                           alt="Home Services"
                           width={house.width}
                           height={house.height}
                           style={{width: '50px', height: '50px', display: "inline-block"}}
                    />
                    <p>Home Services</p>
                </div>
                <div className={styles.feature}>
                    <Image src={car.src}
                           alt="Free Delivery"
                           width={car.width}
                           height={car.height}
                           style={{width: '50px', height: '50px', display: "inline-block"}}/>
                    <p>Free Delivery</p>
                </div>
            </div>
        </section>
    )
}