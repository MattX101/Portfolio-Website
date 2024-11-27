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
            'relative h-10 top-2 bg-primary-light-s1l3 font-bold underline pointer-events-none' : // Active Tab
            'relative h-12 top-0 bg-primary-light-s1l5 animate-homePageNavBar_OnHoverExit hover:h-10 hover:top-2 hover:bg-primary-light-s1l6 hover:animate-homePageNavBar_OnHoverEnter hover:underline'; // Inactive Tab
    }

    return (
        <>
            <PageSection>
                <div className='grid grid-cols-4 grid-rows-1 text-center'>
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

                <div className='bg-primary-light-s1l3'>
                    <TabsManager state={showAddTask} />
                </div>
            </PageSection>

            <br />
        </>
    )
}

export default HomePageNavBar