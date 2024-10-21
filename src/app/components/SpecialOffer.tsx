import styles from "./SpecialOffer.module.css"
import coupon from "@/app/assets/images/coupon.png";
import Image from "next/image";

export default function SpecialOffer() {
    return (
        <div className={styles.specialOffer}>
            <div className={styles.offerText}>
                <h3>Special Offer</h3>
                <h1>50% OFF</h1>
                <p>Get 50% off on all orders for a limited time. Use coupon code <strong>50% OFF</strong> at
                    checkout.</p>
                <button className={styles.buttonOrderNow}>Order Now</button>
            </div>
            <div className={styles.offerImage}>
                <Image src={coupon.src}
                       alt="Coupon Image"
                       width={coupon.width}
                       height={coupon.height}
                       style={{width: '700px', height: '250px', objectFit: "cover", borderRadius: "10px"}}
                />
            </div>
        </div>
    )
}