import IntroSection from "@/app/components/IntroSection";
import Reservation from "@/app/components/Reservation";
import MenuSection from "@/app/components/MenuSection";
import SpecialOffer from "@/app/components/SpecialOffer";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import CustomerReviews from "@/app/components/CustomerReviews";
import styles from "@/app/components/MenuSection.module.css";


export default function Home() {
    return (
        <div>
            <IntroSection/>
            <Reservation/>
            <MenuSection currentPage={1} itemsPerPage={4}/>
            <button type="button" className={styles.buttonViewAll}>View All</button>
            <SpecialOffer/>
            <WhyChooseUs/>
            <CustomerReviews/>
        </div>
    );
}
