import '../../../styles/css/components/PageContent.css'
import React from 'react';
import TxtSubHeader from '../../../components/elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../../elements/text/TxtBaseXL.tsx';
import TxtBase from '../../elements/text/TxtBase.tsx';
import LineBreak from '../../elements/LineBreak.tsx'

const EducationTab = () => {
    return (
        <div className="contents_threeFourthWidth" id="educationTab">
            <br /><br />

            <TxtSubHeader>Education</TxtSubHeader>
            <br />

            <LineBreak />

            <TxtBaseXL>Bachelor of Science (Honours) in Multimedia Software Development</TxtBaseXL>
            <TxtBase>Malta College of Arts, Science & Technology (MCAST)</TxtBase>
            <TxtBase>2020 - 2023</TxtBase>
            <LineBreak />

            <TxtBaseXL>Advanced Diploma in IT (Multimedia Software Development)</TxtBaseXL>
            <TxtBase>Malta College of Arts, Science & Technology (MCAST)</TxtBase>
            <TxtBase>2018 - 2020</TxtBase>
            <LineBreak />

            <TxtBaseXL>MCAST Diploma in ICT</TxtBaseXL>
            <TxtBase>Malta College of Arts, Science & Technology (MCAST) </TxtBase>
            <TxtBase>2017 - 2018</TxtBase>
            <LineBreak />

            <TxtBaseXL>O Levels - Maltese, English, Maths, European Studies, Geography</TxtBaseXL>
            <TxtBase>2017</TxtBase>
            <LineBreak />

            <TxtBaseXL>ECDL</TxtBaseXL>
            <TxtBase>2014 - 2015</TxtBase>
            <LineBreak />

            <br />
        </div>
    )
}

export default EducationTab