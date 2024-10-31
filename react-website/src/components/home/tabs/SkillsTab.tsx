import React from 'react';
import TxtSubHeader from '../../../components/elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../../../components/elements/text/TxtBaseXL.tsx';
import SecondSplit from '../../elements/splitTabs/SecondSplit.tsx';
import ThridSplit from '../../elements/splitTabs/ThirdSplit.tsx';
import FourthSplit from '../../elements/splitTabs/FourthSplit.tsx';

const SkillsTab = () => {
    return (
        <div className="threeFourthsWidthPanel">
            <br /><br />

            <TxtSubHeader>Skills</TxtSubHeader>

            <br />
            <TxtBaseXL>Web Development</TxtBaseXL>
            <br />

            <ThridSplit
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
            <ThridSplit
                a='Less'
                b='Sass/Scss'
                c='Wordpress'
            />

            <br />
            <TxtBaseXL>JavaScript</TxtBaseXL>
            <br />

            <ThridSplit
                a='JavaScript'
                b='TypeScript'
                c='JQuery'
            />
            <SecondSplit
                a='Node.js'
                b='NPM'
            />
            <ThridSplit
                a='React'
                b='Vue'
                c='Angular'
            />

            <br />
            <TxtBaseXL>SQL</TxtBaseXL>
            <br />

            <ThridSplit
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

            <ThridSplit
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
            <ThridSplit
                a='OpenGL'
                b='PHP'
                c='Laravel'
            />

            <br />
            <TxtBaseXL>Game Development</TxtBaseXL>
            <br />

            <ThridSplit
                a='Unity'
                b='UE5'
                c='Godot'
            />
            <ThridSplit
                a='C# in Unity'
                b='C++ in UE5'
                c='Blender 3D'
            />

            <br />
            <TxtBaseXL>Software Developemnt</TxtBaseXL>
            <br />

            <ThridSplit
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
            <ThridSplit
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

            <ThridSplit
                a='Word'
                b='Powerpoint'
                c='Excel'
            />

            <br />
        </div>
    )
}

export default SkillsTab