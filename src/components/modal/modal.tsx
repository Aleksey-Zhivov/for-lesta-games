import { FC, useState } from 'react';
import { ModalUI } from '../ui/modal-ui/modal';
import { TModalProps } from './types';
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomSelector } from '@/utils/store';
import { Ship } from '../ship/ship';

export const Modal: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const ship = useCustomSelector(store => store.ships.vehicles.find(ship => ship.id === id));

    if (!ship) return <div>Корабль не найден</div>;
    
    return (
        <ModalUI 
            children={<Ship data={ship} id={ship.id}/>} 
            onClose={() => navigate(-1)} 
        />
    );
};
