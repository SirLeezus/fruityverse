import styles from "../../styles/card_specs/card_specs_card1.module.css";
import React from "react";
import Image from "next/image";
import AppleCard from "@/public/imgs/card_specs/apple_card.svg";

const Card1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerTextBG}>
                <div className={styles.containerText}>
                    <div className={styles.containerNumber}>
                        <h1 className={styles.number} style={{border:"3px solid #FD65C2FF", background:"#FD65C2FF"}}>1</h1>
                        <h1>Card Name</h1>
                    </div>
                    <p>This is the name of the card.</p>
                    <div className={styles.containerNumber}>
                        <h1 className={styles.number} style={{border:"3px solid #6CC540FF", background:"#6CC540FF"}}>2</h1>
                        <h1>Rarity</h1>
                    </div>
                    <p>The nameplate color indicates the rarity of the monsters.</p>
                    <div className={styles.containerNumber}>
                        <h1 className={styles.number} style={{border:"3px solid #30D7C6FF", background:"#30D7C6FF"}}>3</h1>
                        <h1>Theme</h1>
                    </div>
                    <p>All monsters belong to one of the 7 themes.</p>
                    <div className={styles.containerNumber}>
                        <h1 className={styles.number} style={{border:"3px solid #7182ACFF", background:"#7182ACFF"}}>4</h1>
                        <h1>Health Points</h1>
                    </div>
                    <p>HP represents the health points of the monster. The higher the HP the harder to take down!</p>
                    <div className={styles.containerNumber}>
                        <h1 className={styles.number} style={{border:"3px solid #FD2600FF", background:"#FD2600FF"}}>5</h1>
                        <h1>Type</h1>
                    </div>
                    <p>Cards can be one of three types: Monster, Healer, or Trickster.</p>
                    <div className={styles.containerNumber}>
                        <h1 className={styles.number} style={{border:"3px solid #FDD700FF", background:"#FDD700FF"}}>6</h1>
                        <h1>Attribute</h1>
                    </div>
                    <p>There are 4 Attributes in total: Ripe, Sweet, Bitter, and Rotten. Look out for the NFTs that have multiple!</p>
                    <div className={styles.containerNumber}>
                        <h1 className={styles.number} style={{border:"3px solid #ED13AAFF", background:"#ED13AAFF"}}>7</h1>
                        <h1>Technique</h1>
                    </div>
                    <p>Effects of monsters are written here. When reading the Technique, look for key details such as attack power, healing capabilities, and any special conditions or limitations.</p>
                </div>
            </div>
            <div className={styles.containerImage}>
                <Image src={AppleCard} alt="AppleCard" />
            </div>
        </div>
    );
}

export default Card1;