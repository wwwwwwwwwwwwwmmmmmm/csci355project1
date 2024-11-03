"use client"

import logo from "../assets/images/logo.png"
import zen from "../assets/images/Zen.png"
import Image from "next/image";
import styles from "./NavBar.module.css"
import {useEffect, useRef, useState} from "react";

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);

    const myElementRef = useRef(null);

    const handleScroll = () => {
        if (myElementRef.current) {
            const offsetHeight = myElementRef.current.offsetHeight;
            if (window.scrollY > offsetHeight + 150) {
                console.log("ACTIVE")
                setIsActive(true);
            } else {
                console.log("INACTIVE")
                setIsActive(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.nav} ${isActive ? styles.active : ''}`} ref={myElementRef}>
            <div className={styles.imageContainer}>
                <Image src={logo.src}
                       alt="Left Image"
                       width={360}
                       height={360}
                       style={{height: 50, minWidth: 50, width: "auto", borderRadius: 10, overflow: "hidden"}}
                />
                <Image src={zen.src}
                       alt="Zen Bites Logo"
                       width={663}
                       height={178}
                       style={{
                           height: 50,
                           minWidth: 186,
                           width: "auto",
                           borderRadius: 10,
                           marginLeft: 10,
                           overflow: "hidden"
                       }}
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