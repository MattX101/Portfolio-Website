import React, { useState } from 'react';
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
        return isTabActive(tab) ? "homePageNavBarLink homePageNavBarActiveLink" : "homePageNavBarLink";
    }

    return (
        <>
            <div id="homePageNavBar">
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

                <br />
            </div>

            <TabsManager state={showAddTask} />
        </>
    )
}

export default HomePageNavBar