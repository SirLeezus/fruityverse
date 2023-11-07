import styles from "../../styles/card.module.css";
import React from "react";
import Image from "next/image";
import Kiwicrown from "@/public/imgs/home/kiwicrown.svg";

interface CardProps {
    borderColor: string;
}

const Card1: React.FC<CardProps> = ({ borderColor}) => {
    const containerStyle = {
        borderColor,
    };

    return (
        <div className={styles.container} style={containerStyle}>
            <div className={styles.containerText}>
                <h1>Kingpin Kiwicrown&rsquo;s Emerald Oasis:</h1>
                <p>Behold the captivating, lighthearted realm of Kingpin Kiwicrown&rsquo;s Emerald Oasis! The valley overflows with boundless joy, lush juicy bounties, and cheerful festivities. Here, life is a playful dance, and laughter fills the air like the sweet scent of ripe fruits. </p>
            </div>
            <div className={styles.containerImage}>
                <Image src={Kiwicrown} alt="Kiwicrown" />
            </div>
        </div>
    );
}

export default Card1;