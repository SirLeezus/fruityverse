import styles from "../../styles/card_specs_card.module.css";
import React from "react";
import Image from "next/image";
import CardSpecs from "@/public/imgs/card_specs/card_specs.png";

const Card1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerTextBG}>
                <div className={styles.containerText}>
                    <h1>1. Card Name</h1>
                    <p>This is the name of the card.</p>
                    <h1>2. Rarity</h1>
                    <p>The nameplate color indicates the rarity of the monsters.</p>
                    <h1>3. Theme</h1>
                    <p>All monsters belong to one of the 7 themes.</p>
                    <h1>4. Health Points</h1>
                    <p>HP represents the health points of the monster. The higher the HP the harder to take down!</p>
                    <h1>5. Type</h1>
                    <p>Cards can be one of three types: Monster, Healer, or Trickster.</p>
                    <h1>6. Attribute</h1>
                    <p>There are 4 Attributes in total: Ripe, Sweet, Bitter, and Rotten. Look out for the NFTs that have multiple!</p>
                    <h1>7. Technique</h1>
                    <p>Effects of monsters are written here. When reading the Technique, look for key details such as attack power, healing capabilities, and any special conditions or limitations.</p>
                </div>
            </div>
            <div className={styles.containerImage}>
                <Image src={CardSpecs} alt="CardSpecs" />
            </div>
        </div>
    );
}

export default Card1;