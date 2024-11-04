import styles from "./Flags.module.css"
import Image from "next/image";
import china from "@/app/assets/images/flags/china.svg";
import thailand from "@/app/assets/images/flags/thailand.svg";
import vietnam from "@/app/assets/images/flags/vietnam.svg";
import japan from "@/app/assets/images/flags/japan.svg";

export default function Flags() {
    return (
        <div className={styles.flagsSection}>
            <h2><strong>Who We Are</strong></h2>
            <p><br/>An Asian cuisine restaurant, serving a variety of East Asian food.</p>
            <div className={styles.flags}>
                <div className={styles.flag}>
                    <p>China</p>
                    <Image src={china.src}
                           alt={"China-flag"}
                           width={500}
                           height={500}
                           style={{display: "inline-block"}}
                    />
                    <div className={styles.overview}>
                        Known for its diverse flavors, our Chinese food balances sweet, sour, salty, and spicy, with
                        staples
                        like rice and noodles and regional specialties such as dim sum.
                    </div>
                </div>
                <div className={styles.flag}>
                    <p>Thailand</p>
                    <Image src={thailand.src}
                           alt="Thailand-flag"
                           width={500}
                           height={500}
                           style={{display: "inline-block"}}
                    />
                    <div className={styles.overview}>
                        Celebrated for vibrant flavors, our Thai food blends sweet, sour, salty, and spicy elements,
                        using
                        fresh herbs and ingredients in dishes like Pad Thai and green curry.
                    </div>
                </div>
                <div className={styles.flag}>
                    <p>Vietnam</p>
                    <Image src={vietnam.src}
                           alt="Vietnam-flag"
                           width={500}
                           height={500}
                           style={{display: "inline-block"}}
                    />
                    <div className={styles.overview}>
                        Emphasizing freshness and health, our Vietnamese cuisine features rice, herbs, and iconic dishes
                        like pho, with a lively street food culture reflecting regional diversity.
                    </div>
                </div>
                <div className={styles.flag}>
                    <p>Japan</p>
                    <Image src={japan.src}
                           alt="Japan-flag"
                           width={500}
                           height={500}
                           style={{display: "inline-block"}}
                    />
                    <div className={styles.overview}>
                        Focusing on seasonality and aesthetics, our Japanese food includes rice, fish, and vegetables,
                        with
                        sushi and kaiseki meals showcasing refinement and harmony.
                    </div>
                </div>
            </div>
        </div>
    )
}