import React from 'react';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import styles from './EventGuidelines.module.css';
import EventFlow from '../EventFlow/EventFlow';

const EventGuidelines = () => {
    const rules = [
        "Each completed task unlocks the next challenge",
        "Teams get eliminated progressively after certain rounds",
        "Challenges include problem-solving questions of Easy, Medium, and Hard difficulty",
        "Harder questions award more points",
        "Teams must maximize score to rank higher",
        "Use of any Generative AI tools is strictly prohibited",
        "If at any point no team member is present in the room to solve CLI problems, the team will be eliminated",
        "No fighting, misconduct, or disruptive behavior — leads to disqualification",
        "No cheating or helping other teams to gain unfair advantage"
    ];

    return (
        <SectionWrapper id="guidelines" className={styles.container}>
            <div className="container-standard">
                <header className={styles.header}>
                    <h2 className={styles.title}>EVENT GUIDELINES</h2>
                    <p className={styles.subtitle}>PROTOCOL_V1.0 // READ_CAREFULLY</p>
                </header>

                <div className={styles.grid}>
                    {/* Event Info Card */}
                    <div className={`${styles.card} ${styles.infoCard}`}>
                        <div className={styles.dateBlock}>
                            <span className={styles.label}>Execution Date</span>
                            <div className={styles.value}>22nd February 2026</div>
                        </div>
                        <div className={styles.timeBlock}>
                            <span className={styles.label}>Start Time</span>
                            <div className={styles.value}>12:00 PM IST</div>
                        </div>
                    </div>

                    {/* Description Card */}
                    <div className={`${styles.card} ${styles.descriptionCard}`}>
                        <h3 className={styles.sectionTitle}>Mission Brief</h3>
                        <p className={styles.descText}>
                            QuickSnatch is a CLI-based treasure hunt event. Participants must roam around
                            the campus to discover clues that lead to the next task. Your command line
                            skills and logical thinking will be tested as you navigate through physical
                            and digital challenges.
                        </p>
                    </div>

                    {/* Event Flow Section */}
                    <EventFlow />

                    {/* Rules Section */}
                    <div className={`${styles.card} ${styles.rulesContainer}`}>
                        <h3 className={styles.sectionTitle}>Rules of Engagement</h3>
                        <div className={styles.rulesGrid}>
                            {rules.map((rule, index) => (
                                <div key={index} className={styles.ruleItem}>
                                    <span className={styles.bullet}>{`>`}</span>
                                    <span className={styles.ruleText}>{rule}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leaderboard & Rewards */}
                    <div className={styles.footerGrid}>
                        <div className={`${styles.card} ${styles.footerCard}`}>
                            <h3 className={styles.sectionTitle}>Live Tracking</h3>
                            <p className={styles.highlightText}>
                                Real-time leaderboard will be displayed throughout the event.
                                Teams compete <strong>continuously</strong> for the top position.
                                The team with the highest score wins.
                            </p>
                        </div>

                        <div className={`${styles.card} ${styles.footerCard}`}>
                            <h3 className={styles.sectionTitle}>Rewards</h3>
                            <p className={styles.highlightText}>
                                Top 3 teams will be awarded.
                                <br />
                                Glory awaits those who execute with precision.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default EventGuidelines;
