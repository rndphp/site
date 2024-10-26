import clsx from 'clsx';
import React, { FC, ReactNode, ReactNodeArray } from 'react';

import cn from './style.module.sass';

export interface IRestrictBlockProps {
    children: ReactNode | ReactNodeArray | string;
    fullRight?: boolean;
    fullLeft?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
}

const RestrictBlock: FC<IRestrictBlockProps> = ({
    children,
    fullRight,
    fullLeft,
    paddingTop,
    paddingBottom,
}) => (
    <div
        className={clsx(
            cn.restrict,
            fullRight && cn.fullRight,
            fullLeft && cn.fullLeft,
            paddingTop && cn.paddingTop,
            paddingBottom && cn.paddingBottom
        )}
    >
        {children}
    </div>
);

export default RestrictBlock;
