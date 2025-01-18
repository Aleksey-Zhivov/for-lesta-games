import { FC, useEffect, useRef, useState } from "react";
import { ShipUI } from "../ui/ship-ui/ship-ui"
import { TShipProps } from "./types";

export const Ship: FC<TShipProps> = ( props ) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

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
        ref={ref}/>
}