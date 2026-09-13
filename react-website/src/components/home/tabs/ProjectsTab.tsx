import { useNavigate } from "react-router-dom";

import PageSection from '../../PageSection';
import BtnLink from '../../elements/buttons/BtnTextLink.tsx';
import TxtHeader from '../../elements/text/TxtHeader';
import TxtBaseXL from '../../../components/elements/text/TxtBaseXL.tsx';
import LineBreak from '../../elements/LineBreak.tsx'

const ProjectsTab = () => {
    const navigate = useNavigate();

    return (
        <>
            <PageSection>
                <br /><br />
                <TxtHeader>Projects</TxtHeader>
                <br />
            </PageSection>

            <LineBreak />

            <PageSection>
                <TxtBaseXL>This Website</TxtBaseXL>
            </PageSection>

            <LineBreak />
            <PageSection>
                <BtnLink
                    className='text-lg text-primary-darkHighlight-s1l1 dark:text-primary-lightHighlight-s1l1 hover:underline'
                    text='Runtime Node Editor'
                    onClick={() => navigate('/home/editor')}
                />
            </PageSection>

            <LineBreak />
            <PageSection>
                <BtnLink
                    className='text-lg text-primary-darkHighlight-s1l1 dark:text-primary-lightHighlight-s1l1 hover:underline'
                    text='Procedural Noise based Image Generator'
                    onClick={() => navigate('/home/image_generator')}
                />
            </PageSection>

            <LineBreak />
            <PageSection>
                <BtnLink
                    className='text-lg text-primary-darkHighlight-s1l1 dark:text-primary-lightHighlight-s1l1 hover:underline'
                    text='MattX101 Utils'
                    onClick={() => navigate('/home/utils')}
                />
            </PageSection>

            <LineBreak />
            <br /><br />
        </>
    )
}

export default ProjectsTab