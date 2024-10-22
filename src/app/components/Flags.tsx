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
                    <Image src={china.src}
                           alt={"China-flag"}
                           width={200}
                           height={200}
                           style={{display: "inline-block"}}
                    />
                    <p>China</p>
                </div>
                <div className={styles.flag}>
                    <Image src={thailand.src}
                           alt="Thailand-flag"
                           width={200}
                           height={200}
                           style={{display: "inline-block"}}
                    />
                    <p>Thailand</p>
                </div>
                <div className={styles.flag}>
                    <Image src={vietnam.src}
                           alt="Vietnam-flag"
                           width={200}
                           height={200}
                           style={{display: "inline-block"}}
                    />
                    <p>Vietnam</p>
                </div>
                <div className={styles.flag}>
                    <Image src={japan.src}
                           alt="Japan-flag"
                           width={200}
                           height={200}
                           style={{display: "inline-block"}}
                    />
                    <p>Japan</p>
                </div>
            </div>
        </div>
    )
}