import { ButtonAll } from '@components/ui/button/ButtonAll';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '@/components/ui/Input';

import cn from './style.module.sass';

interface IProps {
    handler?: (success: boolean) => void;
}

const ApplicationPlan: React.FC<IProps> = ({ handler }) => {
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = finalData => {
        setIsFormSubmitting(true);

        setTimeout(() => {
            console.log(finalData);
            setIsFormSubmitting(false);
            handler(true);
        }, 2000);
    };

    const errorTextName = (errors as { name: { message: string } })?.name?.message;
    const errorTextAbstracts = (errors as { abstracts: { message: string } })?.abstracts?.message;

    return (
        <div className={cn.wrapper}>
            <form className={cn.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={cn.row}>
                    <div className={cn.input}>
                        <Input
                            isError={!!errors.name}
                            errorText={errorTextName}
                            type="text"
                            label="Как вас зовут*"
                            placeholder="Введите название"
                            {...register('name', {
                                required: 'Заполните поле Имя',
                            })}
                        />
                    </div>
                    <div className={cn.input}>
                        <Input
                            type="text"
                            label="Компания"
                            placeholder="Введите название"
                            {...register('company')}
                        />
                    </div>
                </div>
                <div className={cn.input}>
                    <Input
                        isTextarea
                        label="Опишите свой опыт разработки"
                        {...register('experience')}
                    />
                </div>
                <div className={cn.buttonWrapper}>
                    <ButtonAll
                        type="button"
                        buttonType="submit"
                        label="Отправить заявку"
                        disable={isFormSubmitting}
                        animation={false}
                    />
                </div>
            </form>
        </div>
    );
};

export default ApplicationPlan;
