import React from 'react';
import PageSection from '../components/PageSection.tsx';
import MainPagesNavMenu from '../components/MainPagesNavMenu.tsx'
import reactLogo from '../images/React Logo.png';
import dreamHostLogo from '../images/DreamHost Logo.png';
import ContentSection from '../components/ContentSection.tsx';
import TxtBase from '../components/elements/text/TxtBase.tsx';
import ImgSmallLogo from '../components/elements/images/ImgSmallLogo.tsx';
import ImgBigLogo from '../components/elements/images/ImgBigLogo.tsx';
import LineBreak from '../components/elements/LineBreak.tsx';
import SecondSplit from '../components/home/tabs/skills/splitTabs/SecondSplit.tsx';

function LoadPage() {
    return (
        <>
            <MainPagesNavMenu
                title='About Website'
                activeLink='about' />

            <PageSection>
                <div className='bg-primary-light-s1l3 dark:bg-primary-dark-s1l3'>
                    <br />

                    <TxtBase>Powered by the <b>React</b> Framework</TxtBase>
                    <br />

                    <div className='flex flex-col items-center'>
                        <ImgBigLogo path={reactLogo} />
                    </div>

                    <br />

                    <ContentSection>
                        <SecondSplit
                            a='TypeScript utilsed'
                            b='Styled by LESS'
                        />
                    </ContentSection>

                    <LineBreak />

                    <TxtBase><b>Hosted</b> on DreamHost</TxtBase>
                    <br />

                    <div className='flex flex-col items-center'>
                        <ImgSmallLogo path={dreamHostLogo} />
                    </div>

                    <br />

                    <TxtBase>Why mathew-xuereb.com?</TxtBase>
                    <br />
                    <TxtBase>Becuase matthewxuereb.com was taken.</TxtBase>
                    <br />
                </div>
            </PageSection>

            <br />
        </>
    );
}

export default LoadPage;