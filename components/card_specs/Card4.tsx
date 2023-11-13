import styles from "../../styles/card-specs/card_specs_card4.module.css";
import React from "react";
import GrapeLeaves from "@/public/imgs/card-specs/grape_leaves.svg";
import Rarity from "@/public/imgs/card-specs/rarity.svg";
import Image from "next/image";

const Card4 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sideImage}>
                <Image src={GrapeLeaves} alt="GrapeLeaves" />
            </div>
            <div className={styles.card}>
                <div className={styles.cardContainer}>
                    <h1>Rarity</h1>
                    <p>Every NFT in our TCG possesses a distinct rarity level, indicating its scarcity and uniqueness within the game.</p>
                </div>
                <div className={styles.cardContainer}>
                    <Image src={Rarity} alt="Rarity" />
                </div>
                <div className={styles.cardContainer}>
                    <p>The rarity is prominently displayed at the top center of the card, just above the nameplate. With a total of five different rarities to explore, each card becomes a prized possession, making your collection truly exceptional and valuable.</p>
                </div>
            </div>
        </div>
    );
}

export default Card4;