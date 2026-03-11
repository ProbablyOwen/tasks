import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setattempts] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);

    function start_attempt() {
        setStarted(true);
        setattempts(attempts - 1);
    }
    function end_attempt() {
        setStarted(false);
    }
    function mulligan() {
        setattempts(attempts + 1);
    }

    return (
        <div>
            <Button
                onClick={start_attempt}
                disabled={started || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={end_attempt} disabled={!started}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={started}>
                Mulligan
            </Button>
            <p>Attempts: {attempts}</p>
        </div>
    );
}
