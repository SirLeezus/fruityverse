import styles from "../../styles/card-specs/card_specs_card3.module.css";
import React from "react";
import WatermelonLeaves from "@/public/imgs/card-specs/watermelon_leaves.svg";
import Attribute from "@/public/imgs/card-specs/attribute.svg";
import Image from "next/image";

const Card3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardContainer}>
                    <h1>Attribute</h1>
                    <p>Some cards can have one or more attributes, such as Bitter, Sweet, Rotten, or Ripe. Attributes influence the card&rsquo;s techniques and gameplay interactions.</p>
                    <div className={styles.attributeContainer}>
                        <Image src={Attribute} alt="Attribute" />
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