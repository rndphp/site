import { Panel, Tab, TabList, Tabs } from '@accessible/tabs';
import ApplicationPlan from '@components/forms/ApplicationPlan';
import ApplicationReady from '@components/forms/ApplicationReady';
import clsx from 'clsx';
import React, { useState } from 'react';

import cn from './style.module.sass';

const Application = () => {
    const [isSuccess, setisSuccess] = useState(false);

    return (
        <>
            {isSuccess ? (
                <div className={cn.successText}>Ваша заявка принята</div>
            ) : (
                <Tabs defaultActive={0} manualActivation preventScroll>
                    <TabList>
                        <div className={clsx(cn.tabItemWrapper)}>
                            <Tab activeClass={cn.active}>
                                <button type="button" className={clsx(cn.tabItem, cn.left)}>
                                    <span>У меня есть готовый доклад</span>
                                </button>
                            </Tab>
                            <Tab activeClass={cn.active}>
                                <button type="button" className={clsx(cn.tabItem, cn.right)}>
                                    <span>Нет темы, но я хочу выступить</span>
                                </button>
                            </Tab>
                        </div>
                    </TabList>

                    <Panel activeClass={cn.activePanel} inactiveClass={cn.inActivePanel}>
                        <div className={cn.panel}>
                            <ApplicationReady handler={setisSuccess} />
                        </div>
                    </Panel>
                    <Panel activeClass={cn.activePanel} inactiveClass={cn.inActivePanel}>
                        <div className={cn.panel}>
                            <ApplicationPlan handler={setisSuccess} />
                        </div>
                    </Panel>
                </Tabs>
            )}
        </>
    );
};

export default Application;
