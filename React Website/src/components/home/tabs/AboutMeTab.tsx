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

                <p>“I don't Hello World, I Program the World”</p>
            </div>

            <br />
        </div>
    )
}

export default AboutMeTab