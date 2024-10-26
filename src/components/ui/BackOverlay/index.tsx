import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import cn from './style.module.sass';

interface IProps {
    showOverlay: boolean;
    closeOverlay: () => void;
}

const BackOverlay: FC<IProps> = ({ showOverlay, closeOverlay }) => {
    const [node, setNode] = useState<Element>(null);

    useEffect(() => {
        setNode(document.querySelector('#__next div#wrapper'));
    }, []);
    return (
        <>
            {node &&
                ReactDOM.createPortal(
                    <CSSTransition in={showOverlay} timeout={300} classNames={cn} unmountOnExit>
                        <div className={cn.overlay} onClick={closeOverlay} role="presentation" />
                    </CSSTransition>,
                    node
                )}
        </>
    );
};

export default BackOverlay;
