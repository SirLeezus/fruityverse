import styles from "@/styles/how-to-play/how_to_play.module.css";
import React from "react";
import Header from "@/components/how-to-play/Header";
import Card1 from "@/components/how-to-play/Card1";
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
