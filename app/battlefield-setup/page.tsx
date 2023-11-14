import styles from "@/styles/battlefield-setup/battlefield.module.css";
import React from "react";
import Header from "@/components/battlefield_setup/Header";
import Card1 from "@/components/battlefield_setup/Card1";
import Card2 from "@/components/battlefield_setup/Card2";
import Footer from "@/components/home/Footer";
import Card3 from "@/components/battlefield_setup/Card3";

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
