import BackOverlay from '@components/ui/BackOverlay';
import clsx from 'clsx';
import React, { FC, ReactNode, ReactNodeArray, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import cn from './style.module.sass';

interface IModalWrapper {
    children: ReactNode | ReactNodeArray;
    title?: string;
    trigger?: ReactNode;
    isOpen: boolean;
    handleClose?: () => void;
    handleOpen?: () => void;
}

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
    title?: string;
    children: ReactNode | ReactNodeArray;
}

const Modal: FC<IProps> = ({ children, isOpen, closeModal, title }) => (
    <>
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={isOpen}
            timeout={300}
            classNames={{
                enterActive: cn.fadeIn,
                exitActive: cn.fadeOut,
            }}
        >
            <div className={cn.wrapper}>
                <div className={cn.inner}>
                    <div className={clsx(cn.toggles, !title && cn.togglesRight)}>
                        {title && (
                            <div className={cn.title} dangerouslySetInnerHTML={{ __html: title }} />
                        )}
                        <div className={cn.crossIcon} onClick={closeModal} role="presentation">
                            <span className={cn.cross} />
                        </div>
                    </div>
                    <div className={cn.content}>{children}</div>
                </div>
            </div>
        </CSSTransition>
        <BackOverlay showOverlay={isOpen} closeOverlay={closeModal} />
    </>
);

const ModalWrapper: FC<IModalWrapper> = props => {
    const [node, setNode] = useState<Element>(null);
    const { trigger, isOpen, handleClose, handleOpen } = props;

    useEffect(() => {
        setNode(document.querySelector('#__next div#wrapper'));
    }, []);

    return (
        <>
            {trigger && (
                <div onClick={handleOpen} role="presentation">
                    {trigger}
                </div>
            )}
            {node &&
                ReactDOM.createPortal(
                    <Modal {...props} isOpen={isOpen} closeModal={handleClose} />,
                    node
                )}
        </>
    );
};

export default ModalWrapper;
