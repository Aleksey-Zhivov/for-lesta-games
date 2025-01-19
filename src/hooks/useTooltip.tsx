import { useState } from "react";

export const useTooltip = () => {
    const [position, setPosition] = useState({ x: 0, y: 0, isVisible: false });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const offset = 10;
        setPosition({
            x: e.clientX + offset,
            y: e.clientY + offset,
            isVisible: true,
        });
    };

    const handleMouseLeave = () => {
        setPosition((prev) => ({ ...prev, isVisible: false }));
    };

    return {
        position,
        handleMouseMove,
        handleMouseLeave,
    };
};
