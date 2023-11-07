import styles from "../../styles/card.module.css";
import React from "react";
import Image from "next/image";
import BlackCherryQueen from "@/public/imgs/home/black_cherry_queen.svg";

interface CardProps {
    borderColor: string;
}

const Card2: React.FC<CardProps> = ({ borderColor}) => {
    const containerStyle = {
        borderColor,
    };

    return (
        <div className={styles.container} style={containerStyle}>
            <div className={styles.containerText}>
                <h1>Black Cherry Queen&rsquo;s Crimson Shadow Kingdom:</h1>
                <p>Venture beyond the glimmering light of the Emerald Oasis to the rugged yet mysterious domain of the Black Cherry Queen&rsquo;s Crimson Shadow Kingdom. Here, the fruit bears a stoic demeanor, unyielding in the face of decomposition. There is no shortage of thrills in this enigmatic land, where the shades of twilight hold secrets waiting to be discovered.</p>
            </div>
            <div className={styles.containerImage}>
                <Image src={BlackCherryQueen} alt="BlackCherryQueen" />
            </div>
        </div>
    );
}

export default Card2;