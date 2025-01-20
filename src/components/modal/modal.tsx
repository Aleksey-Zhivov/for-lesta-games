import { FC, useEffect, useState } from 'react';
import { ModalUI } from '../ui/modal-ui/modal';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCustomSelector } from '@/utils/store';
import { Ship } from '../ship/ship';
import { ShipModalUI } from '../ui/ship-modal-ui/ship-modal-ui';

export const Modal: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const isModalOpen = location.state?.isModalOpen;
    const ship = useCustomSelector(store => store.ships.vehicles.find(ship => ship.id === id));
    const body = document.querySelector('.body');

    const handleEscPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                body?.classList.remove('fixed');
                navigate(-1);
        };
    };

    useEffect(() => {
        if (isModalOpen) {
            body?.classList.add('fixed');
            document.addEventListener('keydown', (e: KeyboardEvent) => handleEscPress(e));
        }
        return document.removeEventListener('keydown', (e: KeyboardEvent) => handleEscPress(e));
    }, [isModalOpen])
    
    return (
        <ModalUI 
            children={ship && 
                <ShipModalUI 
                    name={ship.title}
                    type={ship.type.title}
                    nation={ship.nation.title}
                    level={ship.level}
                    img={ship.icons.large}
                    description={ship.description}

                />} 
            onClose={() => {
                body?.classList.remove('fixed');
                navigate(-1);
            }} 
        />
    );
};
