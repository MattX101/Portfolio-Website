import '../../../styles/PageContent.css'
import React from 'react';
import profilePic from '../../../images/Profile Pic.png';

const AboutMeTab = () => {
    return (
        <div className="contents_threeFourthWidth" id="aboutTab">
            <br />

            <div id="profile">
                <img src={profilePic} alt="logo" />

                <h2>
                    <u>Matthew Xuereb</u>
                </h2>

                <p>Motto - <b>“I don't Hello World, I Code the World”</b></p>

                <br />
            </div>

            <hr />

            <div id="profile">
                <br />
                <h3>Hobbies</h3>

                <p>
                    Ever since I entered the world of coding I have been constantly amazed with the projects people share on the internet.
                    It had inspired me to set out in my own <u>coding adventures</u> in my free time.
                </p>
                <p>The origin of my motto came to be through my interest in <u>Procedural Content Generation</u> as it allows the generation of unique and intersting content</p>
                <p>To further add on my interest in procedural generation, the chosen topic of my <u>dissertation</u> was about the generation of realistic virtual terrains.</p>

                <br />

                <p>
                    Outside of coding I also enjoy <u>Drawing & Sketching</u> ever since a young age. 
                    Along with drawing, I also enjoy playing <u>Video Games</u> and exploring the unique worlds the developers create.
                    </p>

                <br />
                <h3>Values</h3>

                <p>A proper <u>Work-Life balance</u> in order to maintain a healthy lifestyle and avoid burn-out.</p>
                <p>I desire to keep things <u>professional</u> during work as not introduce any unnecessary problems and maintain a healthy relationship with my fellow coworkers.</p>

                <br />
                <h3>Future Goals</h3>

                <p>The development of my first game</p>
                <p>I would love to learn how to play the piano</p>
                <p>Create my own music in a DAW software</p>
            </div>

            <br />
        </div>
    )
}

export default AboutMeTab