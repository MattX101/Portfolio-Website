import React from 'react';
import PageSection from '../../../components/PageSection.tsx';
import ContentSection from '../../../components/ContentSection.tsx';
import TxtBase from '../../../components/elements/text/TxtBase.tsx';
import ImgSmallLogo from '../../elements/images/ImgSmallLogo.tsx';
import LineBreak from '../../elements/LineBreak.tsx';
import ImgBigLogo from '../../elements/images/ImgBigLogo.tsx';
import SecondSplit from './skills/splitTabs/SecondSplit.tsx';
import reactLogo from '../../../images/React Logo.png';
import dreamHostLogo from '../../../images/DreamHost Logo.png';

const AboutWebsiteTab = () => {
    return (
        <>
            <PageSection>
                <div className='bg-primary-light-s1l3 dark:bg-primary-dark-s1l1'>
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
                        <div className='bg-primary-light-s1l3 p-2 rounded-full'>
                            <div className='w-8'>
                                <ImgSmallLogo path={dreamHostLogo} />
                            </div>
                        </div>
                    </div>

                    <br />

                    <TxtBase>Why mathew-xuereb.com?</TxtBase>
                    <br />
                    <TxtBase>Becuase matthewxuereb.com was taken.</TxtBase>
                    <br />
                </div>
            </PageSection>
        </>
    )
}

export default AboutWebsiteTab