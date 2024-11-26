import React from 'react';
import PageSection from '../../../components/PageSection.tsx';
import TxtHeader from '../../../components/elements/text/TxtHeader.tsx';
import TxtBaseXL from '../../../components/elements/text/TxtBaseXL.tsx';
import TxtBase from '../../../components/elements/text/TxtBase.tsx';
import LineBreak from '../../elements/LineBreak.tsx'

const WorkTab = () => {
    return (
        <>
            <br /><br />
            
            <PageSection>
                <TxtHeader>Work Experience</TxtHeader>
                <br />
            </PageSection>
            
            <LineBreak />

            <PageSection>
                <TxtBaseXL>Apprentice</TxtBaseXL>
                <TxtBase>Malta Police Force</TxtBase>
                <TxtBase>September 2022 - June 2023</TxtBase>
            </PageSection>

            <LineBreak />
        </>
    )
}

export default WorkTab