import styles from "../../styles/battlefield-setup/battlefield_card1.module.css";
import React from "react";
import OpponentsField from "@/public/imgs/battlefield-setup/your_opponents_field.svg";
import Image from "next/image";

const Card1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardContainer}>
                    <Image src={OpponentsField} alt="OpponentsField" />
                    <h1>Opponent&rsquo;s Battlefield</h1>
                </div>
            </div>
        </div>
    );
}

export default Card1;