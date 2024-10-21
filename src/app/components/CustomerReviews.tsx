import styles from "./CustomerReviews.module.css"
import {StaticImageData} from "next/dist/shared/lib/get-img-props";
import women from "@/app/assets/images/women.png";
import man from "@/app/assets/images/man.png";
import Image from "next/image";


class Review {
    imageData: StaticImageData;
    name: string;
    review: string;
    id: string;

    constructor(imageData: StaticImageData, name: string, review: string) {
        this.imageData = imageData;
        this.name = name;
        this.review = review;
        this.id = crypto.randomUUID();
    }
}

const reviews: Review[] = [
    new Review(women, "Alice Thompson", "The ambiance is serene, and the food is absolutely divine. Will definitely be back!"),
    new Review(man, "Michael Lee", "Exceptional flavors and presentation. Zen Bites is my new go-to spot."),
    new Review(women, "Sarah Nguyen", "A perfect blend of healthy and delicious! The customer service is also top-notch."),
    new Review(man, "David Martinez", "Every dish feels like it’s been crafted with care. Highly recommend!"),
    new Review(women, "Emily Wright", "So fresh and flavorful! Zen Bites is always a treat."),
    new Review(man, "Alex Patel", "Impeccable service and food that leaves you craving more. A must-try!"),
]

export default function CustomerReviews() {
    const generatedReviews = () => {
        return reviews.map((item) => (
            <div key={item.id} className={styles.reviewCard}>
                <div className={styles.profilePicture}>
                    <Image
                        src={item.imageData.src}
                        alt={item.name}
                        width={item.imageData.width}
                        height={item.imageData.height}
                        style={{
                            width: '60px',
                            height: '60px',
                            objectFit: "cover",
                            borderRadius: "50%",
                            border: "2px solid #000"
                        }}

                    />
                </div>
                <h4>{item.name}</h4>
                <p>{item.review}</p>
            </div>
        ));
    }

    return (
        <div className={styles.customerReviews}>
            <h2>Customer Reviews</h2>
            <div className={styles.reviewsCarousel}>
                <button className={styles.prev}>‹</button>
                <div className={styles.reviewsContainer}>
                    {/* Customer review cards */}
                    {generatedReviews()}
                </div>
                <button className={styles.next}>›</button>
            </div>
        </div>
    )
}