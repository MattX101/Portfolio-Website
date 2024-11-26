import React from 'react';
import TxtHeader from '../../../elements/text/TxtHeader.tsx';
import TxtBaseXL from '../../../elements/text/TxtBaseXL.tsx';
import SecondSplit from '../../../home/tabs/skills/splitTabs/SecondSplit.tsx';
import ThirdSplit from '../../../home/tabs/skills/splitTabs/ThirdSplit.tsx';
import FourthSplit from '../../../home/tabs/skills/splitTabs/FourthSplit.tsx';

const SkillsTab = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-4/5'>
                <br /><br />

                <TxtHeader>Skills</TxtHeader>
                <br />

                <br />
                <TxtBaseXL>Web Development</TxtBaseXL>
                <br />

                <ThirdSplit
                    a='HTML5'
                    b='CSS'
                    c='JavaScript'
                />
                <SecondSplit
                    a='Bootstrap'
                    b='Asp.net'
                />
                <SecondSplit
                    a='Front End Developer'
                    b='Single Page Applications'
                />
                <ThirdSplit
                    a='Less'
                    b='Sass/Scss'
                    c='Wordpress'
                />

                <br />
                <TxtBaseXL>JavaScript</TxtBaseXL>
                <br />

                <ThirdSplit
                    a='JavaScript'
                    b='TypeScript'
                    c='JQuery'
                />
                <SecondSplit
                    a='Node.js'
                    b='NPM'
                />
                <ThirdSplit
                    a='React'
                    b='Vue'
                    c='Angular'
                />

                <br />
                <TxtBaseXL>SQL</TxtBaseXL>
                <br />

                <ThirdSplit
                    a='SQL'
                    b='MySQL'
                    c='NoSQL'
                />

                <br />
                <TxtBaseXL>GIT</TxtBaseXL>
                <br />

                <SecondSplit
                    a='Git'
                    b='Github'
                />

                <br />
                <TxtBaseXL>Coding</TxtBaseXL>
                <br />

                <ThirdSplit
                    a='C++'
                    b='C#'
                    c='Java'
                />
                <SecondSplit
                    a='Python'
                    b='JSON'
                />
                <SecondSplit
                    a='JavaScript'
                    b='TypeScript'
                />
                <ThirdSplit
                    a='OpenGL'
                    b='PHP'
                    c='Laravel'
                />

                <br />
                <TxtBaseXL>Game Development</TxtBaseXL>
                <br />

                <ThirdSplit
                    a='Unity'
                    b='UE5'
                    c='Godot'
                />
                <ThirdSplit
                    a='C# in Unity'
                    b='C++ in UE5'
                    c='Blender 3D'
                />

                <br />
                <TxtBaseXL>Software Developemnt</TxtBaseXL>
                <br />

                <ThirdSplit
                    a='RayLib5'
                    b='LWJGL'
                    c='GLFW'
                />

                <br />
                <TxtBaseXL>IDE</TxtBaseXL>
                <br />

                <SecondSplit
                    a='VS Community'
                    b='VS Code'
                />
                <ThirdSplit
                    a='Jetbrains Rider'
                    b='Jetbrains Intellij Idea'
                    c='Eclipse'
                />

                <br />
                <TxtBaseXL>Operating Systems</TxtBaseXL>
                <br />

                <SecondSplit
                    a='Linux'
                    b='Windows'
                />

                <br />
                <TxtBaseXL>Adobe</TxtBaseXL>
                <br />

                <FourthSplit
                    a='Photoshop'
                    b='Illustrator'
                    c='XD'
                    d='After Effects'
                />

                <br />
                <TxtBaseXL>Affinty</TxtBaseXL>
                <br />

                <SecondSplit
                    a='Photo'
                    b='Designer'
                />

                <br />
                <TxtBaseXL>Music</TxtBaseXL>
                <br />

                <SecondSplit
                    a='Ableton Live'
                    b='Audacity'
                />

                <br />
                <TxtBaseXL>Microsoft</TxtBaseXL>
                <br />

                <ThirdSplit
                    a='Word'
                    b='Powerpoint'
                    c='Excel'
                />

                <br />
            </div>
        </div>
    )
}

export default SkillsTab