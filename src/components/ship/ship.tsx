import { FC, useEffect, useRef, useState } from "react";
import { ShipUI } from "../ui/ship-ui/ship-ui"
import { TShipProps } from "./types";
import { useNavigate, useParams } from "react-router-dom";

export const Ship: FC<TShipProps> = ( props ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isCharVisible, setCharIsVisible] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/ship/${props.id}`)
    }

    const handleMouseEnter = () => {
        setCharIsVisible(true);
      };
    
      const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
    
      const handleMouseLeave = () => {
        setCharIsVisible(false);
      };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    
    return <ShipUI 
        data={props.data} 
        isVisible={isVisible} 
        ref={ref}
        onClick={onClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseMove={handleMouseMove}
        handleMouseLeave={handleMouseLeave}
        isCharVisible={isCharVisible}
        cursorPosition={cursorPosition}
    />
}