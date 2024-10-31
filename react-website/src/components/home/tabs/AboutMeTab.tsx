import React from 'react';
import profilePic from '../../../images/Profile Pic.png';
import TxtSubHeader from '../../../components/elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../../../components/elements/text/TxtBaseXL.tsx';
import TxtBase from '../../../components/elements/text/TxtBase.tsx';
import LineBreak from '../../elements/LineBreak.tsx'
import Image from '../../elements/Image.tsx';

const AboutMeTab = () => {
    return (
        <div className="threeFourthsWidthPanel">
            <br /><br />

            <div id="halfWidthContentSection">
                <Image path={profilePic} className='imgProfileRound' />

                <br /><br />

                <TxtSubHeader>
                    <u>Matthew Xuereb</u>
                </TxtSubHeader>

                <TxtBase>Motto - <b>“I don't Hello World, I Code the World”</b></TxtBase>

                <br />
            </div>

            <LineBreak />

            <div id="halfWidthContentSection">
                <TxtBaseXL>Hobbies</TxtBaseXL>
                <br />

                <TxtBase>
                    Ever since I entered the world of coding I have been constantly amazed with the projects people share on the internet.
                    It had inspired me to set out in my own <u>coding adventures</u> in my free time.
                </TxtBase>
                <TxtBase>The origin of my motto came to be through my interest in <u>Procedural Content Generation</u> as it allows the generation of unique and intersting content</TxtBase>
                <TxtBase>To further add on my interest in procedural generation, the chosen topic of my <u>dissertation</u> was about the generation of realistic virtual terrains.</TxtBase>

                <br />

                <TxtBase>
                    Outside of coding I also enjoy <u>Drawing & Sketching</u> ever since a young age.
                    Along with drawing, I also enjoy playing <u>Video Games</u> and exploring the unique worlds the developers create.
                </TxtBase>

                <br />
                <TxtBaseXL>Values</TxtBaseXL>
                <br />

                <TxtBase>A proper <u>Work-Life balance</u> in order to maintain a healthy lifestyle and avoid burn-out.</TxtBase>
                <TxtBase>I desire to keep things <u>professional</u> during work as not introduce any unnecessary problems and maintain a healthy relationship with my fellow coworkers.</TxtBase>

                <br />
                <TxtBaseXL>Future Goals</TxtBaseXL>
                <br />

                <TxtBase>The development of my first game</TxtBase>
                <TxtBase>I want to develop my on Game Engine using C++ & Vulkan</TxtBase>
                <TxtBase>I would love to learn how to play the piano</TxtBase>
            </div>

            <br />
        </div>
    )
}

export default AboutMeTab