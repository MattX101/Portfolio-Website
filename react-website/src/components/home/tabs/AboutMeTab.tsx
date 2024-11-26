import React from 'react';
import PageSection from '../../../components/PageSection.tsx';
import ContentSection from '../../../components/ContentSection.tsx';
import ProfilePic from '../../../components/elements/images/ProfilePic.tsx';
import TxtSubHeader from '../../../components/elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../../../components/elements/text/TxtBaseXL.tsx';
import TxtBase from '../../../components/elements/text/TxtBase.tsx';
import Underline from '../../../components/elements/Underline.tsx';
import LineBreak from '../../elements/LineBreak.tsx'

const AboutMeTab = () => {
    return (
        <>
            <ContentSection>
                <br /><br />

                <div className='flex flex-col items-center'>
                    <ProfilePic />
                </div>

                <br /><br />

                <TxtSubHeader>
                    <u>Matthew Xuereb</u>
                </TxtSubHeader>

                <TxtBase>Motto - <b>“I don't Hello World, I Code the World”</b></TxtBase>

                <br />
            </ContentSection>

            <LineBreak />

            <PageSection>
                <ContentSection>
                    <TxtBaseXL>Hobbies</TxtBaseXL>
                    <br />

                    <TxtBase>
                        Ever since I entered the world of coding I have been constantly amazed with the projects people share on the internet.
                        It had inspired me to set out in my own <Underline>coding adventures</Underline> in my free time.
                    </TxtBase>
                    <TxtBase>The origin of my motto came to be through my interest in <Underline>Procedural Content Generation</Underline> as it allows the generation of unique and intersting content</TxtBase>
                    <TxtBase>To further add on my interest in procedural generation, the chosen topic of my <Underline>dissertation</Underline> was about the generation of realistic virtual terrains.</TxtBase>

                    <br />

                    <TxtBase>
                        Outside of coding I also enjoy <Underline>Drawing & Sketching</Underline> ever since a young age.
                        Along with drawing, I also enjoy playing <Underline>Video Games</Underline> and exploring the unique worlds the developers create.
                    </TxtBase>

                    <br />
                    <TxtBaseXL>Values</TxtBaseXL>
                    <br />

                    <TxtBase>A proper <Underline>Work-Life balance</Underline> in order to maintain a healthy lifestyle and avoid burn-out.</TxtBase>
                    <TxtBase>I desire to keep things <Underline>professional</Underline> during work as not introduce any unnecessary problems and maintain a healthy relationship with my fellow coworkers.</TxtBase>

                    <br />
                    <TxtBaseXL>Future Goals</TxtBaseXL>
                    <br />

                    <TxtBase>The development of my first game</TxtBase>
                    <TxtBase>I want to develop my on Game Engine using C++ & Vulkan</TxtBase>
                    <TxtBase>I would love to learn how to play the piano</TxtBase>
                </ContentSection>
            </PageSection>
        </>
    )
}

export default AboutMeTab