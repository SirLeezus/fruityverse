import styles from "../../styles/card_specs/card_specs_card3.module.css";
import React from "react";
import WatermelonLeaves from "@/public/imgs/card_specs/watermelon_leaves.png";
import AttributeBitter from "@/public/imgs/card_specs/attribute_bitter.png";
import AttributeSweet from "@/public/imgs/card_specs/attribute_sweet.png";
import AttributeRipe from "@/public/imgs/card_specs/attribute_ripe.png";
import AttributeRotten from "@/public/imgs/card_specs/attribute_rotten.png";
import Image from "next/image";

const Card3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardText}>
                    <h1>Attribute</h1>
                    <p>Some cards can have one or more attributes, such as Bitter, Sweet, Rotten, or Ripe. Attributes influence the card's techniques and gameplay interactions.</p>
                </div>
                <div className={styles.attributeContainer}>
                    <div className={styles.attributeImageContainer}>
                        <Image src={AttributeBitter} alt="AttributeBitter" />
                        <Image src={AttributeSweet} alt="AttributeSweet" />
                    </div>
                    <div className={styles.attributeImageContainer}>
                        <Image src={AttributeRipe} alt="AttributeRipe" />
                        <Image src={AttributeRotten} alt="AttributeRotten" />
                    </div>
                </div>
            </div>
            <div className={styles.sideImage}>
                <Image src={WatermelonLeaves} alt="WatermelonLeaves" />
            </div>
        </div>
    );
}

export default Card3;