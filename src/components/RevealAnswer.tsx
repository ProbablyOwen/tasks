import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answerRevealed, setAnswerRevealed] = useState(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setAnswerRevealed(!answerRevealed);
                }}
            >
                Reveal answer
            </Button>

            {answerRevealed && <p>The answer is 42</p>}
        </div>
    );
}
