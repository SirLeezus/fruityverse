import styles from "../../styles/battlefield-setup/battlefield_card3.module.css";
import React from "react";
import BattlefieldCherries from "@/public/imgs/battlefield-setup/battlefield_cherries.svg";
import BattlefieldApple from "@/public/imgs/battlefield-setup/battlefield_apple.svg";
import Image from "next/image";

const Card3 = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.imgLeft} src={BattlefieldCherries} alt="BattlefieldCherries" />
            <Image className={styles.imgRight} src={BattlefieldApple} alt="BattlefieldApple" />
            <div className={styles.card}>
                <div className={styles.cardContainer}>
                    <h1>Congratulations!</h1>
                    <p>You are now equipped with the knowledge to embark on an epic adventure through the Fruityverse NFT TCG! Master the rules, explore diverse card attributes, and unleash your strategic brilliance as you compete against other players in this engaging, fruity realm. May your journey be filled with fruitful triumphs and exciting battles! Happy playing in the Fruityverse!</p>
                </div>
            </div>
        </div>
    );
}

export default Card3;