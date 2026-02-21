import React from 'react';
import styles from './TeamRegistrationForm.module.css';

const Input = ({ label, value, onChange, error, required, placeholder, disabled }) => {
    return (
        <div className={styles.inputGroup}>
            <label className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`${styles.input} ${error ? styles.inputError : ''} ${disabled ? styles.inputDisabled : ''}`}
                aria-label={label}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default Input;
