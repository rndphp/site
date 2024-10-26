import React from 'react';

import { socialServices } from '@data/socialServices';
import { IMenuItem } from '@/types/layout';
import cn from './style.module.sass';

const FooterSocial = () => (
    <div className={cn.social}>
        <ul className={cn.list}>
            {socialServices.map((item: IMenuItem) => (
                <li className={cn.listItem} key={item.code}>
                    <a className={cn.item} href={item.link}>
                        <img
                            className={cn.image}
                            src={`/img/social/${item.code}.svg`}
                            alt={item.name}
                            // layout="fixed"
                            width={50}
                            height={50}
                        />
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterSocial;
