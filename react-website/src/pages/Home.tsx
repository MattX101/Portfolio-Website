import React, { useState } from 'react';
import PageSection from '../components/PageSection.tsx';
import BtnButton from '../components/elements/buttons/BtnButton.tsx';

import AboutMeTab from '../components/home/tabs/AboutMeTab.tsx';
import EducationTab from '../components/home/tabs/education/EducationTab.tsx';
import WorkTab from '../components/home/tabs/WorkTab.tsx';
import SkillsTab from '../components/home/tabs/skills/SkillsTab.tsx';
import ContactMeTab from '../components/home/tabs/ContactMeTab.tsx';
import AboutWebsiteTab from '../components/home/tabs/AboutWebsiteTab.tsx';

const AboutMeIndex = 1;
const EducationIndex = 2;
const WorkIndex = 3;
const SkillsIndex = 4;
const ContactMeIndex = 5;
const AboutWebsiteIndex = 6;

var activeTab = AboutMeIndex;

function LoadPage() {
    const [index, toggleTab] = useState(AboutMeIndex)

    function switchTab(index: number) {
        toggleTab(index);
        activeTab = index;
    }

    function renderTab() {
        switch (activeTab) {
            case AboutMeIndex:      return <AboutMeTab />;
            case EducationIndex:    return <EducationTab />;
            case WorkIndex:         return <WorkTab />;
            case SkillsIndex:       return <SkillsTab />;
            case ContactMeIndex:    return <ContactMeTab />;
            case AboutWebsiteIndex: return <AboutWebsiteTab />;
            
            default:                return <AboutMeTab />;
        }
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
        <div className='py-4'>
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

                            <BtnButton
                                text='Contact Me'
                                id={null}
                                className={getTabClassName(ContactMeIndex)}
                                onAction={() => switchTab(ContactMeIndex)} />

                            <BtnButton
                                text='About Website'
                                id={null}
                                className={getTabClassName(AboutWebsiteIndex)}
                                onAction={() => switchTab(AboutWebsiteIndex)} />
                        </div>

                        <div className='col-span-4 bg-primary-light-s1l3 dark:bg-primary-dark-s1l1'>
                            {renderTab()}
                        </div>
                    </div>
                </div>
            </PageSection>
        </div>
    );
}

export default LoadPage;