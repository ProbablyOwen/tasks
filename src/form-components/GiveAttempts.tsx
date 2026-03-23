import { parse } from "path";
import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [giveAttempt, setGiveAttempt] = useState<string>("");

    const Attempt = () => {
        setAttempts(attempts - 1);
    };

    const GiveAttempt = () => {
        const amountgive = parseInt(giveAttempt);
        if (!isNaN(amountgive)) {
            setAttempts(attempts + amountgive);
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <input
                type="number"
                value={giveAttempt}
                onChange={(e) => {
                    setGiveAttempt(e.target.value);
                }}
            />
            <button onClick={Attempt} disabled={attempts <= 0}>
                Use
            </button>
            <button onClick={GiveAttempt}>Gain</button>
        </div>
    );
}
