import './style/style.css';
import '../../styles/SplitTab.css'
import React from 'react';
import MainPagesNavMenu from '../../components/MainPagesNavMenu.tsx'
import reactLogo from '../../images/React Logo.png';
import dreamHostLogo from '../../images/DreamHost Logo.png';

function LoadPage() {
    return (
        <div className="aboutWebsite">
            <MainPagesNavMenu
                title='About Website'
                activeLink='about' />

            <div className="contents_halfWidth">
                <br />

                <p>Powered by the <b>React</b> Framework</p>
                <img src={reactLogo} className="logoBig" alt="logo" />
                <br /> <br />

                <div id="split">
                    <p id="splitBy2"><b>TypeScript</b> utilsed</p>
                    <p id="splitBy2">Styled by <b>LESS</b></p>
                </div>
                <br />

                <br />
                <hr/>
                <br />

                <p><b>Hosted</b> on DreamHost</p>
                <img src={dreamHostLogo} className="logoSmall" alt="logo" />
                <br/><br/>

                <p>Why mathew-xuereb.com?</p>
                <p>Becuase matthewxuereb.com was taken.</p>
                <br />

                <hr/>
                <br />

                <h3>GitHub Link:</h3>
                <p>https://github.com/MattX101/Portfolio-Website</p>
                <br />
            </div>

            <br />
        </div>
    );
}

export default LoadPage;