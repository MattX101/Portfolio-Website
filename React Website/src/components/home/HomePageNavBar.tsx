import React, { useState } from 'react';
import TabsManager from './TabsManager.tsx';

const HomePageNavBar = () => {
    const [showAddTask, setShowAddTask] = useState(1)

    function switchTab(clickedTab, num) {
        setShowAddTask(num);

        var currentActiveTab = document.getElementsByClassName('link active')[0] as HTMLElement;
        currentActiveTab.className = 'link';

        var newActiveTab = document.getElementById(clickedTab) as HTMLElement;
        newActiveTab.className = 'link active';
    }

    return (
        <div>
            <div id="tabs">
                <button className="link active" id="aboutMeButton" onClick={() => switchTab('aboutMeButton', 1)}>
                    <p>About Me</p>
                </button>
                <button className="link" id="educationButton" onClick={() => switchTab('educationButton', 2)}>
                    <p>Education</p>
                </button>
                <button className="link" id="workButton" onClick={() => switchTab('workButton', 3)}>
                    <p>Work</p>
                </button>
                <button className="link" id="skillsButton" onClick={() => switchTab('skillsButton', 4)}>
                    <p>Skills</p>
                </button>

                <br />
            </div>

            <TabsManager state={showAddTask} />
        </div>
    )
}

export default HomePageNavBar