import React from 'react';
import Entry from './Entry.tsx';
import TxtHeader from '../../../elements/text/TxtHeader.tsx';
import LineBreak from '../../../elements/LineBreak.tsx'

const EducationTab = () => {
    return (
        <>
            <br /><br />
            <TxtHeader>Education</TxtHeader>
            <br />

            <LineBreak />
            
            <Entry
                Title='Bachelor of Science (Honours) in Multimedia Software Development'
                Location='Malta College of Arts, Science & Technology (MCAST)'
                Date='2020 - 2023' />

            <Entry
                Title='Advanced Diploma in IT (Multimedia Software Development)'
                Location='Malta College of Arts, Science & Technology (MCAST)'
                Date='2018 - 2020' />

            <Entry
                Title='MCAST Diploma in ICT'
                Location='Malta College of Arts, Science & Technology (MCAST)'
                Date='2017 - 2018' />

            <Entry
                Title='O Levels - Maltese, English, Maths, European Studies, Geography'
                Location={null}
                Date='2017' />

            <Entry
                Title='ECDL'
                Location={null}
                Date='2014 - 2015' />

            <br />
        </>
    )
}

export default EducationTab