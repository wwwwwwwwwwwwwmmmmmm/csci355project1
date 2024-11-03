"use client"

import {menuItems} from "@/app/components/MenuSection";

import Image from "next/image";
import clock from "@/app/assets/images/clock.png";
import house from "@/app/assets/images/house.png";
import car from "@/app/assets/images/car.png";
import styles from "./IntroSection.module.css"
import {useEffect, useState} from "react";

export default function IntroSection() {

    const [placeholderText, setPlaceholderText] = useState('');
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fullPlaceholder = menuItems[currentPlaceholderIndex].name;
        const typingInterval = setInterval(() => {
            if (currentIndex < fullPlaceholder.length) {
                setPlaceholderText((prev) => prev + fullPlaceholder[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentPlaceholderIndex((prev) => (prev + 1) % menuItems.length);
                    setPlaceholderText('');
                    setCurrentIndex(0);
                }, 2000);
            }
        }, 250); // Speed of typing

        return () => clearInterval(typingInterval); // Cleanup interval on unmount
    }, [currentIndex, currentPlaceholderIndex]);

    return (
        <section className={styles.introSection}>
            <h1>Organic Foods Made <br/> Easy &amp; Healthy</h1>
            <div className="searchContainer">
                <input type="text"
                       placeholder={placeholderText}
                       onBlur={() => setPlaceholderText('')}
                />
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