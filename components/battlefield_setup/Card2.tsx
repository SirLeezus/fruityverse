import styles from "../../styles/battlefield-setup/battlefield_card2.module.css";
import React from "react";
import YourField from "@/public/imgs/battlefield-setup/your_field.svg";
import Image from "next/image";

const Card2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardContainer}>
                    <h1>Your Battlefield</h1>
                    <Image src={YourField} alt="YourField" />
                    <div className={styles.textContainer}>
                        <div className={styles.textColum}>
                            <div className={styles.textBox}>
                                <h2>1. Main Battle Zone</h2>
                                <p>Plant your monsters and healers here! You can have up to 3 monsters and 2 healers!</p>
                            </div>
                            <div className={styles.textBox}>
                                <h2>2. Trickster Zone</h2>
                                <p>Tricksters are Planted or Sowed in this zone!</p>
                            </div>
                            <div className={styles.textBox}>
                                <h2>3. Compost Pile</h2>
                                <p>Place your destroyed Monsters, Healers, and used Tricksters Cards here!</p>
                            </div>
                        </div>
                        <div className={styles.textColum}>
                            <div className={styles.textBox}>
                                <h2>4. Deck</h2>
                                <p>Place your Main Deck face-down here. Draw your cards from here!</p>
                            </div>
                            <div className={styles.textBox}>
                                <h2>5. Harvest</h2>
                                <p>Tricksters are Planted or Sowed in this zone!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card2;