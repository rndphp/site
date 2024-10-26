import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

import cn from './style.module.sass';

export interface IInput {
    value?: string;
    placeholder?: string;
    label: string;
    type?: string;
    onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    isTextarea?: boolean;
    isError?: boolean;
    errorText?: string;
    customClass?: string;
    size?: 'default' | 'small';
    isDisabled?: boolean;
    [name: string]: unknown;
}

const Input: React.FC<IInput> = ({
    value,
    placeholder,
    label,
    onChangeHandler,
    isError,
    errorText,
    isTextarea,
    customClass,
    isDisabled,
    type,
    size,
    ...rest
}) => {
    let Tag;

    if (isTextarea) {
        Tag = 'textarea';
    } else {
        Tag = 'input';
    }

    return (
        <>
            <div className={clsx(cn.wrapper, size === 'small' && cn.small, customClass)}>
                {label && <div className={cn.label}>{label}</div>}
                {/* eslint-disable react/jsx-props-no-spreading */}
                <Tag
                    disabled={isDisabled}
                    onChange={onChangeHandler}
                    value={value}
                    placeholder={placeholder}
                    className={clsx(cn.input, !isError && cn.valid)}
                    type={type}
                    {...rest}
                />
            </div>
            {isError && (
                <div key={errorText} className={cn.error}>
                    {errorText}
                </div>
            )}
        </>
    );
};
export default Input;
