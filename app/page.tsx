import styles from "@/styles/home/home.module.css";
import React from "react";
import Header from "@/components/home/Header";
import Card1 from "@/components/home/Card1";
import Card2 from "@/components/home/Card2";
import Footer from "@/components/home/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <div className={styles.content}>
                <Card1 borderColor="#35592a" />
                <Card2 borderColor="#ea2148" />
                <Footer />
            </div>
        </main>
    )
}
