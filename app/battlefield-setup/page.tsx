import styles from "@/styles/battlefield-setup/battlefield.module.css";
import React from "react";
import Header from "@/components/battlefield_setup/Header";
import Card1 from "@/components/card_specs/Card1";
import Footer from "@/components/home/Footer";

export default function CardSpecs() {
    return (
        <main>
            <Header />
            <div className={styles.content}>
                <Card1 />
                <Footer />
            </div>
        </main>
    )
}
