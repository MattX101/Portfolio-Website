import React, { useState } from 'react';
import TabsManager from './TabsManager.tsx';
import BtnButton from '../elements/buttons/BtnButton.tsx';

const aboutMeIndex = 1;
const educationIndex = 2;
const workIndex = 3;
const skillsIndex = 4;

var activeTab = aboutMeIndex;

const HomePageNavBar = () => {
    const [showAddTask, setShowAddTask] = useState(aboutMeIndex)

    function switchTab(index: number) {
        setShowAddTask(index);

        activeTab = index;
    }

    function isTabActive(tab: number) {
        return tab === activeTab ? true : false;
    }

    function getTabClassName(tab: number) {
        return isTabActive(tab) ? "link active" : "link";;
    }

    return (
        <>
            <div id="tabs">
                <BtnButton
                    text='About Me'
                    id={null}
                    className={getTabClassName(aboutMeIndex)}
                    onAction={() => switchTab(aboutMeIndex)} />

                <BtnButton
                    text='Education'
                    id={null}
                    className={getTabClassName(educationIndex)}
                    onAction={() => switchTab(educationIndex)} />

                <BtnButton
                    text='Work'
                    id={null}
                    className={getTabClassName(workIndex)}
                    onAction={() => switchTab(workIndex)} />

                <BtnButton
                    text='Skills'
                    id={null}
                    className={getTabClassName(skillsIndex)}
                    onAction={() => switchTab(skillsIndex)} />

                <br />
            </div>

            <TabsManager state={showAddTask} />
        </>
    )
}

export default HomePageNavBar