import React from 'react';
import MainPagesNavMenu from '../components/MainPagesNavMenu.tsx'
import reactLogo from '../images/React Logo.png';
import dreamHostLogo from '../images/DreamHost Logo.png';
import TxtBase from '../components/elements/text/TxtBase.tsx';
import LineBreak from '../components/elements/LineBreak.tsx';
import Image from '../components/elements/Image.tsx';

function LoadPage() {
    return (
        <>
            <MainPagesNavMenu
                title='About Website'
                activeLink='about' />

            <div className="halfWidthPanel">
                <br />

                <TxtBase>Powered by the <b>React</b> Framework</TxtBase>
                <br />

                <Image path={reactLogo} className='imgLogoBig' />
                <br /><br />

                <div id="skillsRow">
                    <div id="skillsSplitBy2">
                        <TxtBase><b>TypeScript</b> utilsed</TxtBase>
                    </div>
                    <div id="skillsSplitBy2">
                        <TxtBase>Styled by <b>LESS</b></TxtBase>
                    </div>
                </div>

                <LineBreak />

                <TxtBase><b>Hosted</b> on DreamHost</TxtBase>
                <br />

                <Image path={dreamHostLogo} className='imgLogoSmall' />
                <br /><br />

                <TxtBase>Why mathew-xuereb.com?</TxtBase>
                <TxtBase>Becuase matthewxuereb.com was taken.</TxtBase>
                <br />
            </div>

            <br />
        </>
    );
}

export default LoadPage;