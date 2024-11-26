import React from 'react';
import ContentSection from '../../../../components/ContentSection.tsx';
import TxtBaseXL from '../../../elements/text/TxtBaseXL.tsx';
import TxtBase from '../../../elements/text/TxtBase.tsx';
import LineBreak from '../../../elements/LineBreak.tsx'

const Entry = ({ Title, Location, Date }) => {
    return (
        <>
            <ContentSection>
                <TxtBaseXL>{Title}</TxtBaseXL>
                <TxtBase>{Location}</TxtBase>
                <TxtBase>{Date}</TxtBase>
            </ContentSection>

            <LineBreak />
        </>
    )
}

export default Entry