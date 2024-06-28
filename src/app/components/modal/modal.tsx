import React, {FC, ReactNode, useEffect} from 'react';
import styleModal from './modal.module.css';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import {IoCloseSharp} from "react-icons/io5";


const modalNode = document.getElementById('modal');

interface IModal {
    setOpen: (b: boolean) => void,
    children?: ReactNode,
}

const Modal: FC<IModal> = ({setOpen, children}) => {
    const closeModal = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleCloseEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleCloseEscape);

        return () => document.removeEventListener('keydown', handleCloseEscape);

    }, []);


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

    return ReactDOM.createPortal(modal, modalNode as Element);
};

export default Modal
