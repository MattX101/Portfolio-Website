import React, { useState } from 'react';
import PageSection from '../../components/PageSection.tsx';
import TabsManager from './TabsManager.tsx';
import BtnButton from '../elements/buttons/BtnButton.tsx';

const AboutMeIndex = 1;
const EducationIndex = 2;
const WorkIndex = 3;
const SkillsIndex = 4;

var activeTab = AboutMeIndex;

const HomePageNavBar = () => {
    const [showAddTask, setShowAddTask] = useState(AboutMeIndex)

    function switchTab(index: number) {
        setShowAddTask(index);

        activeTab = index;
    }

    function isTabActive(tab: number) {
        return tab === activeTab ? true : false;
    }

    function getTabClassName(tab: number) {
        return isTabActive(tab) ?
            'relative w-full h-10 bg-primary-light-s1l3 dark:bg-primary-dark-s1l1 font-bold underline dark:decoration-primary-light-s2l4 pointer-events-none' : // Active Tab
            'relative w-full h-10 bg-primary-light-s1l5 hover:bg-primary-light-s1l2 dark:bg-primary-darkHighlight-s2l4 hover:dark:bg-primary-darkHighlight-s2l1 hover:font-semibold hover:underline dark:decoration-primary-light-s2l4'; // Inactive Tab
    }

    return (
        <>
            <PageSection>
                <div className='bg-primary-light-s2l6 dark:bg-primary-dark-s2l3 p-2'>
                    <div className='grid grid-cols-5 grid-rows-1'>
                        <div>
                            <BtnButton
                                text='About Me'
                                id={null}
                                className={getTabClassName(AboutMeIndex)}
                                onAction={() => switchTab(AboutMeIndex)} />

                            <BtnButton
                                text='Education'
                                id={null}
                                className={getTabClassName(EducationIndex)}
                                onAction={() => switchTab(EducationIndex)} />

                            <BtnButton
                                text='Work'
                                id={null}
                                className={getTabClassName(WorkIndex)}
                                onAction={() => switchTab(WorkIndex)} />

                            <BtnButton
                                text='Skills'
                                id={null}
                                className={getTabClassName(SkillsIndex)}
                                onAction={() => switchTab(SkillsIndex)} />
                        </div>
                        <div className='col-span-4 bg-primary-light-s1l3 dark:bg-primary-dark-s1l1'>
                            <TabsManager state={showAddTask} />
                        </div>
                    </div>
                </div>
            </PageSection>

            <br />
        </>
    )
}

export default HomePageNavBar