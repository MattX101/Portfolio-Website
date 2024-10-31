import React from 'react';
import AboutMeTab from '../../components/home/tabs/AboutMeTab.tsx';
import EducationTab from '../../components/home/tabs/EducationTab.tsx';
import WorkTab from '../../components/home/tabs/WorkTab.tsx';
import SkillsTab from '../../components/home/tabs/SkillsTab.tsx';

const TabsManager = ({ state }) => {
    return (
        <>
            {state === 1 && <AboutMeTab />}
            {state === 2 && <EducationTab />}
            {state === 3 && <WorkTab />}
            {state === 4 && <SkillsTab />}

            <br />
        </>
    )
}

export default TabsManager