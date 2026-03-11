import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "Easter"
    | "New Years"
    | "Fourth of July";
const Holiday_Alphabet: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Fourth of July",
    "Fourth of July": "Halloween",
    Halloween: "New Years",
    "New Years": "Christmas",
};
const Holiday_InOrder: Record<Holiday, Holiday> = {
    "New Years": "Easter",
    Easter: "Fourth of July",
    "Fourth of July": "Halloween",
    Halloween: "Christmas",
    Christmas: "New Years",
};
const HolidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    "Fourth of July": "🎆",
    Halloween: "🎃",
    "New Years": "🎉",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function cycleHolidayAlphabet(): void {
        const newHoliday = Holiday_Alphabet[holiday];
        setHoliday(newHoliday);
    }

    function cycleHoidayInOrder(): void {
        const newHoliday = Holiday_InOrder[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={cycleHolidayAlphabet}>
                Cycle Holiday Alphabetically
            </Button>
            <Button onClick={cycleHoidayInOrder}>
                Cycle Holiday By Time In Year
            </Button>
            <p>
                Holiday: {holiday} {HolidayEmojis[holiday]}
            </p>
        </div>
    );
}
