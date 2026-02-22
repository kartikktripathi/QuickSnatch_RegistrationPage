import React from 'react';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import styles from './Winners.module.css';

// We'll assume the images are placed in src/assets/winners/
import img1 from '../../assets/winners/1.jpeg';
import img2 from '../../assets/winners/2.jpeg';
import img3 from '../../assets/winners/3.jpeg';

const Winners = () => {
    const winners = [
        {
            place: "1st Place",
            badgeClass: styles.badge1,
            teamName: "Bash and Bloom",
            members: [
                "Rameez Rahman",
                "Siddhi Tripathi",
                "Himanshu Dubey",
                "Vedant Tapkir",
                "Bhabani Pradhan"
            ],
            image: img1
        },
        {
            place: "2nd Place",
            badgeClass: styles.badge2,
            teamName: "Cognix",
            members: [
                "Kritika Pandey",
                "Yash Kumar",
                "Aman Sharma",
                "Kisna Aggarwal"
            ],
            image: img2
        },
        {
            place: "3rd Place",
            badgeClass: styles.badge3,
            teamName: "The Logic Crafters",
            members: [
                "Jay Sawant",
                "Yatnesh Agarwal",
                "Shanmukha Sai"
            ],
            image: img3
        }
    ];

    return (
        <SectionWrapper id="winners" className={styles.container}>
            <div className="container-standard">
                <header className={styles.header}>
                    <h2 className={styles.title}>Winners of Quick Snatch 2.0</h2>
                    <p className={styles.subtitle}>MISSION_ACCOMPLISHED // TOP_OPERATIVES</p>
                </header>

                <div className={styles.winnersList}>
                    {winners.map((winner, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={winner.image} alt={`${winner.teamName} - ${winner.place}`} />
                            </div>
                            <div className={styles.info}>
                                <div className={`${styles.badge} ${winner.badgeClass}`}>
                                    {winner.icon} {winner.place}
                                </div>
                                <h3 className={styles.teamName}>{winner.teamName}</h3>
                                <div className={styles.membersSection}>
                                    <div className={styles.membersTitle}>Operatives</div>
                                    <ul className={styles.membersList}>
                                        {winner.members.map((member, mIdx) => (
                                            <li key={mIdx}>{member}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Winners;
