import { menuList } from '@data/menuList';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { IMenuItem } from '@/types/layout';

import cn from './style.module.sass';

const HeaderMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen]);

    return (
        <div className={cn.menu}>
            <div className={clsx(cn.wrapper, menuOpen && cn.active)}>
                <ul className={cn.list}>
                    {menuList.map((item: IMenuItem) => (
                        <li className={cn.listItem} key={item.code}>
                            <a className={cn.item} href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={clsx(cn.burger, menuOpen && cn.active)}
                onClick={() => setMenuOpen(!menuOpen)}
                role="presentation"
            />
        </div>
    );
};

export default HeaderMenu;
