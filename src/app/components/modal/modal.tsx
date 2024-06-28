'use client'
import React, {FC, ReactNode, useEffect, useState} from 'react';
import styleModal from './modal.module.css';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import {IoCloseSharp} from "react-icons/io5";

interface IModal {
    setOpen: (b: boolean) => void,
    children?: ReactNode,
}

const Modal: FC<IModal> = ({setOpen, children}) => {
    const [modalContainer, setModalContainer] = useState<Element | null>(null);

    useEffect(() => {
        let container = document.getElementById('modal');
        if (!container) {
            container = document.createElement('div');
            container.setAttribute('id', 'modal');
            document.body.appendChild(container);
        }
        setModalContainer(container);

        const handleCloseEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleCloseEscape);

        return () => {
            document.removeEventListener('keydown', handleCloseEscape);
        };
    }, []);

    const closeModal = () => {
        setOpen(false);
    };

    if (!modalContainer) return null;

    const modal = (
        <div>
            <ModalOverlay onClick={closeModal}/>
            <div className={` ${styleModal.popup}`}>
                <button className={`${styleModal.closeBtn}`} onClick={closeModal}>
                    <IoCloseSharp />
                </button>
                {children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modal, modalContainer);
};

export default Modal
