import '../styles/css/pages/aboutWebsite.css';
import '../styles/css/components/SplitTab.css'
import React from 'react';
import MainPagesNavMenu from '../components/MainPagesNavMenu.tsx'
import reactLogo from '../images/React Logo.png';
import dreamHostLogo from '../images/DreamHost Logo.png';
import TxtBase from '../components/elements/text/TxtBase.tsx';
import LineBreak from '../components/elements/LineBreak.tsx';
import Image from '../components/elements/Image.tsx';

function LoadPage() {
    return (
        <div className="aboutWebsite">
            <MainPagesNavMenu
                title='About Website'
                activeLink='about' />

            <div className="contents_halfWidth">
                <br />

                <TxtBase>Powered by the <b>React</b> Framework</TxtBase>
                <br />

                <Image path={reactLogo} name='logoBig' />
                <br /><br />

                <div id="split">
                    <div id="splitBy2">
                        <TxtBase><b>TypeScript</b> utilsed</TxtBase>
                    </div>
                    <div id="splitBy2">
                        <TxtBase>Styled by <b>LESS</b></TxtBase>
                    </div>
                </div>

                <LineBreak />

                <TxtBase><b>Hosted</b> on DreamHost</TxtBase>
                <br />

                <Image path={dreamHostLogo} name='logoSmall' />
                <br /><br />

                <TxtBase>Why mathew-xuereb.com?</TxtBase>
                <TxtBase>Becuase matthewxuereb.com was taken.</TxtBase>
                <br />
            </div>

            <br />
        </div>
    );
}

export default LoadPage;