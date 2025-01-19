import { FC, useEffect, useRef, useState } from "react";
import { ShipUI } from "../ui/ship-ui/ship-ui"
import { TShipProps } from "./types";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Ship: FC<TShipProps> = ( props ) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [tooltipPosition, setTooltipPosition] = useState<{x: number, y: number}>({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const background = location.state?.background;

    const onClick = () => {
        if (!background) {
            navigate(`/ship/${props.id}`, { 
                state: { 
                    isModalOpen: true, 
                    background: { 
                        pathname: location.pathname, 
                        search: location.search }  
                } 
            });
        }
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
        setTooltipVisible(true);
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };
      
    const handleMouseLeave = () => {
        setTooltipVisible(false);
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
        tooltipVisible={tooltipVisible}
        tooltipPosition={tooltipPosition}
    />
}