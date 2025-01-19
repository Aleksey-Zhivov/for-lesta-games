import { FC, useEffect, useState } from 'react';
import { ModalUI } from '../ui/modal-ui/modal';
import { TModalProps } from './types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCustomSelector } from '@/utils/store';
import { Ship } from '../ship/ship';

export const Modal: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const isModalOpen = location.state?.isModalOpen;
    const ship = useCustomSelector(store => store.ships.vehicles.find(ship => ship.id === id));

    const handleEscPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                navigate(-1);
        };
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('keydown', (e: KeyboardEvent) => handleEscPress(e));
        }
        return document.removeEventListener('keydown', (e: KeyboardEvent) => handleEscPress(e));
    }, [isModalOpen])
    
    return (
        <ModalUI 
            children={ship && <Ship data={ship} id={ship.id}/>} 
            onClose={() => navigate(-1)} 
        />
    );
};
