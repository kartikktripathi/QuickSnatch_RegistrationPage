import React, { useState, useEffect } from 'react';
import styles from './EventFlow.module.css';

const EventFlow = () => {
    const [columns, setColumns] = useState(4);

    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 768) setColumns(1);
            else if (width < 1024) setColumns(3); // Tablet/Laptop often fits 3 better
            else setColumns(4); // Desktop
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const steps = [

        { title: "First CLI Challenge", desc: "Execute commands. Solve the terminal puzzle.", icon: "💻" },
        { title: "Code Submission", desc: "Extract the key. Submit to verify access.", icon: "🔑" },
        { title: "Location Riddle", desc: "Decrypt message. Identify the physical target.", icon: "🧩" },
        { title: "Find Location", desc: "Navigate campus. Locate the hidden marker.", icon: "📍" },
        { title: "Submit Location Code", desc: "Enter coordinates using the marker code.", icon: "📡" },
        { title: "Next Challenge", desc: "System unlocked. Proceed to higher difficulty.", icon: "🔓" },
        { title: "Repeat Cycle", desc: "Loop execution until mission complete.", icon: "🔄" },
        { title: "Scoring & Survival", desc: "Maximize points. Avoid elimination protocol.", icon: "🏆" }
    ];

    const getPosition = (index, cols) => {
        const row = Math.floor(index / cols);
        // Even rows (0, 2...) go Left->Right. Odd rows (1, 3...) go Right->Left.
        const isLtoR = row % 2 === 0;
        const colIndex = index % cols;
        const col = isLtoR ? colIndex : (cols - 1 - colIndex);

        let direction = 'right'; // Default flow
        const isLastInRow = colIndex === cols - 1;
        const isLastStep = index === steps.length - 1;

        if (isLastStep) direction = 'none';
        else if (isLastInRow) direction = 'down';
        else direction = isLtoR ? 'right' : 'left';

        // For mobile (1 col), always down
        if (cols === 1) direction = isLastStep ? 'none' : 'down';

        return { row: row + 1, col: col + 1, direction };
    };

    return (
        <section className={styles.container}>
            <h3 className={styles.sectionTitle}>EVENT PROTOCOL FLOW</h3>

            <div className={styles.flowContainer} style={{
                '--columns': columns
            }}>
                {steps.map((step, index) => {
                    const { row, col, direction } = getPosition(index, columns);
                    return (
                        <div
                            key={index}
                            className={styles.stepNode}
                            data-direction={direction}
                            style={{
                                gridColumnStart: col,
                                gridRowStart: row
                            }}
                        >
                            {step.isCycle && <span className={styles.cycleIndicator}>LOOP_ACTIVE</span>}

                            <div className={styles.stepHeader}>
                                <span className={styles.stepIndex}>0{index + 1}</span>
                                <span className={styles.stepIcon}>{step.icon}</span>
                            </div>

                            <h4 className={styles.stepTitle}>{step.title}</h4>
                            <p className={styles.stepDesc}>{step.desc}</p>

                            {/* Connector Line Logic handled via CSS data-direction */}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default EventFlow;
