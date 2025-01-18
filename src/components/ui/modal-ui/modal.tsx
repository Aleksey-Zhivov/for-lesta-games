import { FC } from "react";
import { TModalUIProps } from "./types";
import './modal.scss';

export const ModalUI: FC<TModalUIProps> = (props) => (
    <>
        <div className="modal">
            <div className="modal__overlay" onClick={props.onClose}></div>
            <div className="modal__content">
                <button className="modal__close" onClick={props.onClose}>x</button>
                {props.children}
            </div>
        </div>
    </>
);