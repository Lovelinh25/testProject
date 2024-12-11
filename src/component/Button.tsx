import React from 'react';
import './Button.css'; // Import tệp CSS của bạn

interface ButtonProps {
    handleStart: () => void;
    handlePause: () => void;
    handleReset: () => void;
}

export const Button: React.FC<ButtonProps> = ({ handleStart, handlePause, handleReset }) => {
    return (
        <div className="button-container">
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
