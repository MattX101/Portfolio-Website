import React from 'react';
import TxtSubHeader from '../../../components/elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../../../components/elements/text/TxtBaseXL.tsx';
import TxtBase from '../../../components/elements/text/TxtBase.tsx';
import LineBreak from '../../elements/LineBreak.tsx'

const WorkTab = () => {
    return (
        <div className="threeFourthsWidthPanel">
            <br /><br />

            <TxtSubHeader>Work Experience</TxtSubHeader>
            <br />

            <LineBreak />

            <TxtBaseXL>Apprentice</TxtBaseXL>
            <TxtBase>Malta Police Force</TxtBase>
            <TxtBase>September 2022 - June 2023</TxtBase>
            <LineBreak />

            <br />
        </div>
    )
}

export default WorkTab