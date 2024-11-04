"use client"
import styles from "./SpecialOffer.module.css"
import coupon from "@/app/assets/images/coupon.png";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function SpecialOffer() {

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            if (current < 50) {
                current += 1;
                setCounter(current);
            } else {
                clearInterval(interval);
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.specialOffer}>
            <div className={styles.offerText}>
                <h3>Special Offer</h3>
                <h1>{counter}% OFF</h1>
                <p>Get {counter}% off on all orders for a limited time. Use coupon code <strong>LIMITED</strong> at
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