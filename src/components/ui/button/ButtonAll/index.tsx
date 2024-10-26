import clsx from 'clsx';
import React from 'react';

import cn from './style.module.sass';

export interface ButtonProps {
    /**
     * Тип: кнопка или ссылка
     */
    type: 'button' | 'link';
    /**
     * Ссылка
     */
    href?: string;
    /**
     * Target атрибут
     */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /**
     * Содержимое кнопки
     */
    label: string;
    /**
     * Активность кнопки
     */
    disable?: boolean;
    /**
     * Нужна ли анимация на кнопке
     */
    animation?: boolean;
    /**
     * Необязательный обработчик щелчков
     */
    onClick?: () => void;
    /**
     * Дополнительный класс
     */
    customClass?: string;
    /**
     * Тип, в случае выбора кнопки
     */
    buttonType?: 'button' | 'submit' | 'reset';
}

export const ButtonAll: React.FC<ButtonProps> = ({
    label,
    disable = false,
    type = 'button',
    href,
    target,
    animation = true,
    onClick,
    customClass,
    buttonType = 'button',
}) => {
    const className = clsx(
        cn.btnAll,
        customClass,
        disable === true && cn.disable,
        animation === true && cn.animation,
        animation === true && cn.animationInit
    );

    const children = (
        <>
            <span>{label}</span>
        </>
    );

    return (
        <>
            {type === 'button' ? (
                // eslint-disable-next-line react/button-has-type
                <button type={buttonType} className={className} onClick={onClick}>
                    {children}
                </button>
            ) : (
                <a href={href} target={target} className={className} onClick={onClick}>
                    {children}
                </a>
            )}
        </>
    );
};
