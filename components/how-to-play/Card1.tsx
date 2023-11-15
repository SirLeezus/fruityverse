import styles from "../../styles/how-to-play/how_to_play_card1.module.css";
import React from "react";

const Card1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.line} />
            <div className={styles.titleContainer}>
                <h1>Understanding the Basics</h1>
            </div>
            <div className={styles.containerBlock}>
                <div className={styles.containerBlockChild}>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Life Force & Shield</h1>
                            <p>Life Force(LF) & Shield: Each player starts off with 2500 Life Force and 500 Shield. The goal of the game is to deplete your opponent&rsquo;s Life Force and Shield to 0.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Planting</h1>
                            <h2>There are three main types of plants: Plant, Sow, and Fertilize.</h2>
                            <p>A <strong>Sow</strong> (face-down) card is not revealed to your opponent. While face-down, it has no name, attribute, stats, etc. It can be flipped face-up by an effect when it is attacked, or the <strong>Year</strong> after it is <strong>Sowed</strong>.</p>
                            <p>A <strong>Planted</strong> (face-up) fruit cannot be flipped face-down, except by an effect.</p>
                            <p>The position they are in determines which fruit you can attack with during your <strong>Year</strong>. Battle position can be changed manually once per <strong>Year</strong> for each fruit, during your <strong>Plant Phase</strong>. You cannot change its battle position if it was <strong>Planted, Replanted, Harvested, or Fertlized</strong> already changed positions, or had attacked during that turn.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.containerBlockChild}>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Health Points (HP) & Summoning Cards</h1>
                            <p>Health Points (HP): This determines not only the fruits&rsquo; life but also how to plant them. Some fruit require Fertilizers to be planted. In order to obtain fertilizer, you must select a fruit of lower life and send it to the Compost.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Fertilizers</h1>
                            <p>• Fruit with HP of 100 to 450, do not need Fertilizers to be planted.</p>
                            <p>• Fruit ranging from HP 500 to 700 need one Fertilizer.</p>
                            <p>• Fruit ranging from HP 750 or higher require 3 Fertilizers.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Battlefield</h1>
                            <p>There are 3 different types of cards in the Fruityvers: fruit, Trickster and Healer. When setting the playing field each player can have up to 5 Tricksters, 3 fruits, and 2 Healers. See <u>Battlefield Setup</u> for more details on how to set your cards.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.line} />
            <div className={styles.titleContainer}>
                <h1>Turn Phases</h1>
                <h2>A player’s turn is considered 1 year in the Fruityverse. There are 4 phases.</h2>
            </div>
            <div className={styles.containerBlock}>
                <div className={styles.containerBlockChild}>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>1) Cultivate Phase</h1>
                            <p>At the start of your first Year draw till you have 5 cards in hand. At the start of your Years after, draw 1 card from your Deck.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>3) Attack Phase</h1>
                            <p>The Attack Phase is the phase in which battles are conducted. An Attack Phase can be conducted every Year (except the first turn of the Duel) after the turn player ends their Plant Phase.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.containerBlockChild} style={{gap:"2rem"}}>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>2) Plant Phase</h1>
                            <p>During this phase, you can Sow, Plant, Replant, Fertilize, and Harvest cards. During the Plant Phase, the player may:</p>
                            <p>• Normal Plant/Sow a card.</p>
                            <p>• The player can only perform one Normal Plant/Sow per Year.</p>
                            <p>• Plant a Sowed card, provided it was not Sowed during that same Year.</p>
                            <p>• Fertilize a card(s).</p>
                            <p>After Plant Phase has ended, the turn player may choose to enter the Attack Phase. If they choose not to, the player automatically proceeds to the Hibernation Phase.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerBlock} style={{paddingBottom:"5rem"}}>
                <div className={styles.containerBlockChild} style={{paddingTop:"2rem"}}>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>4) Hibernation Phase</h1>
                            <p>The Hibernation Phase is the final phase of the Year. It occurs after Attack Phase has been completed.</p>
                            <p>There are some card effects that take place during Hibernation Phase, such as &quot;Harvest Hook&quot;. The player gets to decide the order to apply their effects that apply or activate at this time.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.line} />
            <div className={styles.titleContainer}>
                <h1>Understanding the Game Mechanics</h1>
            </div>
            <div className={styles.containerBlock}>
                <div className={styles.containerBlockChild}>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Setting Trickster cards</h1>
                            <p>Trickster cards can be set from the hand during the Plant Phase. When they must be Sowed in an open Trickster Zone. If you set a Trickster card, it can't be activated until the next turn.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Prepare your fruit for Battle</h1>
                            <p>If your fruit is Planted during your Attack Phase, you can attack an opposing fruit with it. If your opponent controls no fruit, you can attack directly. Each fruit can only declare an attack once per turn. If the fruit it battles with is face-down, it is flipped face-up just before damage calculation.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.containerBlockChild}>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Health Points (HP) & Summoning Cards</h1>
                            <p>Health Points (HP): This determines not only the fruits&rsquo; life but also how to plant them. Some fruit require Fertilizers to be planted. In order to obtain fertilizer, you must select a fruit of lower life and send it to the Compost.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Trigger a replay</h1>
                            <p>If, during your attack, the number of fruits your opponent controls is changed, a replay is triggered in which you can choose to attack with the same, attack with a different, or not attack. You can also choose a different attack target. If you attack with a different, the first fruit is considered to have already attacked, and cannot attack again for the rest of the turn.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerBlock}>
                <div className={styles.containerBlockChild} style={{paddingTop:"2rem", paddingBottom:"10rem"}}>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <h1>Calculate damage</h1>
                            <p>Damage is done directly to the opponent’s fruits HP.</p>
                            <p>• If the fruit HP reaches 0 and there is attack damage left, its controller takes damage equal to the difference.</p>
                            <p>• If the fruit is in the Sow position and it has less HP than the attacking fruit’s ATK, it is destroyed but its controller does not take damage.</p>
                            <p>• If the opponent’s fruits HP is equal to or higher than the attacking fruit, it is left in a face-up position and takes damage based on ATK.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card1;