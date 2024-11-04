"use client";
import styles from "./MenuSection.module.css"
import soupdump from "@/app/assets/images/soupdump.png";
import realfood from "@/app/assets/images/realfood.png";
import gentao from "@/app/assets/images/gentao.png";
import shrimp from "@/app/assets/images/shrimp.png";

import Image from "next/image";
import {StaticImageData} from "next/dist/shared/lib/get-img-props";
import {useEffect, useState} from "react";

interface MenuSectionProps {
    currentPage: number;
    itemsPerPage: number;
}

class MenuItem {
    imageData: StaticImageData;
    price: number;
    name: string;
    category: string;
    time: number;
    id: string;

    constructor(imageData: StaticImageData, price: number, name: string, category: string, time: number) {
        this.imageData = imageData;
        this.price = price;
        this.name = name;
        this.category = category;
        this.time = time;
        this.id = crypto.randomUUID();
    }
}

export const menuItems: MenuItem[] = [
    new MenuItem(soupdump, 20, "Soup Dumplings", "Dumplings", 20),
    new MenuItem(realfood, 15, "Beef Stir-fried", "Beef", 15),
    new MenuItem(gentao, 18, "General tso's chicken", "Chicken", 30),
    new MenuItem(shrimp, 15, "Shrimp fried Rice", "Shrimp", 20),
    new MenuItem(soupdump, 20, "Soup Dumplings", "Dumplings", 20),
    new MenuItem(realfood, 15, "Beef Stir-fried", "Beef", 15),
    new MenuItem(gentao, 18, "General tso's chicken", "Chicken", 30),
    new MenuItem(shrimp, 15, "Shrimp fried Rice", "Shrimp", 20),
    new MenuItem(realfood, 15, "Beef Stir-fried", "Beef", 15),
    new MenuItem(gentao, 18, "General tso's chicken", "Chicken", 30),
    new MenuItem(shrimp, 15, "Shrimp fried Rice", "Shrimp", 20),
    new MenuItem(realfood, 15, "Beef Stir-fried", "Beef", 15),
    new MenuItem(gentao, 18, "General tso's chicken", "Chicken", 30),
    new MenuItem(soupdump, 20, "Soup Dumplings", "Dumplings", 20), 
    new MenuItem(shrimp, 15, "Shrimp fried Rice", "Shrimp", 20),
    new MenuItem(realfood, 15, "Beef Stir-fried", "Beef", 15),
    new MenuItem(soupdump, 20, "Soup Dumplings", "Dumplings", 20),
    new MenuItem(gentao, 18, "General tso's chicken", "Chicken", 30),
    new MenuItem(shrimp, 15, "Shrimp fried Rice", "Shrimp", 20),
    new MenuItem(realfood, 15, "Beef Stir-fried", "Beef", 15),
    new MenuItem(gentao, 18, "General tso's chicken", "Chicken", 30),
    new MenuItem(soupdump, 20, "Soup Dumplings", "Dumplings", 20), 
    new MenuItem(shrimp, 15, "Shrimp fried Rice", "Shrimp", 20),  
]

export default function MenuSection({currentPage, itemsPerPage}: MenuSectionProps) {
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 1000); // delay

        return () => clearTimeout(timer);
    }, []);

    const generatedMenuItems = () => {
        return currentItems.map((item) => {
            return (
                <div key={item.id} className={styles.menuCard}>
                    {!showImage ?
                        <div className={`${styles.animatedBg} ${styles.animatedBgText}`} style={{
                            width: '90px',
                            height: '30px',
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                        }}></div> :
                        <div className={styles.priceTag}>{`$${item.price}.00`}</div>
                    }
                    {!showImage ?
                        <div className={`${styles.animatedBg} ${styles.img}`}></div> :
                        <Image src={item.imageData.src} alt={item.name} width={item.imageData.width}
                               height={item.imageData.height} className={styles.menuImage}/>
                    }
                    {!showImage ?
                        <div className={`${styles.animatedBg} ${styles.animatedBgText}`}
                             style={{marginTop: '15px', height: '25px'}}></div> :
                        <h3>{item.name}</h3>
                    }
                    {!showImage ?
                        <div className={`${styles.animatedBg} ${styles.animatedBgText}`}
                             style={{marginTop: '5px', marginBottom: '65px', height: '15px'}}></div> :
                        <p>{`🍴 ${item.category} \u00A0 🕒 ${item.time} min`}</p>
                    }
                    {!showImage ?
                        <div className={`${styles.animatedBg} ${styles.animatedBgText}`} style={{
                            marginTop: '50px',
                            width: '190px',
                            height: '35px',
                            position: 'absolute',
                            left: '28%'
                        }}></div> :
                        <button type="button" className={styles.buttonOrder}>Order Now</button>
                    }
                </div>
            );
        });
    }

    return (
        <div className={styles.menuSection}>
            <h2>Choose &amp; Enjoy</h2>
            <p>{`Inspired by recipes and creations of the world's best chefs`}</p>
            <div className={styles.menuGrid}>
                {generatedMenuItems()}
            </div>
        </div>
    )
}
