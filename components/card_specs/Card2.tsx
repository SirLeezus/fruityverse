import styles from "../../styles/card_specs/card_specs_card2.module.css";
import React from "react";
import LemonLeaves from "@/public/imgs/card_specs/lemon_leaves.svg";
import Themes from "@/public/imgs/card_specs/themes.svg";
import Image from "next/image";

const Card2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sideImage}>
                <Image src={LemonLeaves} alt="LemonLeaves" />
            </div>
            <div className={styles.card}>
                <div className={styles.cardContainer}>
                    <h1>Theme</h1>
                    <p>The Fruityverse unfolds through seven captivating themes, each with its unique backstory, shaping a realm of wonder.</p>
                    <Image src={Themes} alt="Themes" />
                    <p>From thrilling Adventures to expressive Emotions, immerse in competitive Sports, explore skilled Professions, savor the ever-changing Seasons, revel in lively Festivals, and experience opulence with the Gilded allure. Every card embodies its theme, offering a delightful universe of fruit-inspired storytelling and gameplay.</p>
                </div>
            </div>
        </div>
    );
}

export default Card2;