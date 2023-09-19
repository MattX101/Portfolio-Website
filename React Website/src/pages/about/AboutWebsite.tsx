import './style.css'
import '../../styles/SplitTab.css'
import React from 'react';
import MainPagesNavMenu from '../../components/MainPagesNavMenu.tsx'
import reactLogo from '../../images/React Logo.png';

function LoadPage() {
    return (
        <div className="aboutWebsite">
            <MainPagesNavMenu
                title='About Website'
                activeLink='about' />

            <div className="contents_halfWidth">
                <br />

                <p>Powered by the <b>React</b> Framework</p>
                <img src={reactLogo} className="reactLogo" alt="logo" />
                <br /> <br />

                <div id="split">
                    <p id="splitBy2"><b>TypeScript</b> utilsed</p>
                    <p id="splitBy2">Styled by <b>LESS</b></p>
                </div>
                <br />
            </div>

            <br />
        </div>
    );
}

export default LoadPage;