import styles from "@/styles/how_to_play/how_to_play.module.css";
import React from "react";
import Header from "@/components/how_to_play/Header";
import Card1 from "@/components/how_to_play/Card1";
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
