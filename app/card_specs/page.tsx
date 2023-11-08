import styles from "@/styles/card_specs/card_specs.module.css";
import React from "react";
import Header from "@/components/card_specs/Header";
import Card1 from "@/components/card_specs/Card1";
import Footer from "@/components/home/Footer";
import Card2 from "@/components/card_specs/Card2";
import Card3 from "@/components/card_specs/Card3";

export default function CardSpecs() {
    return (
        <main>
            <Header />
            <div className={styles.content}>
                <Card1 />
                <Card2 />
                <Card3 />
                <Footer />
            </div>
        </main>
    )
}
