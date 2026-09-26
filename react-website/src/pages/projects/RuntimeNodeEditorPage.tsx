import { useNavigate } from "react-router-dom";

import PageSection from '../../components/PageSection.tsx';
import LeftImageContent from '../../components/home/projects/LeftImageContent.tsx';
import RightImageContent from '../../components/home/projects/RightImageContent.tsx';
import CenteredImageContent from '../../components/home/projects/CenteredImageContent.tsx';
import TxtBase from '../../components/elements/text/TxtBase.tsx'
import TxtHeaderXL from '../../components/elements/text/TxtHeaderXL.tsx'
import TxtHeader from '../../components/elements/text/TxtHeader.tsx'
import BtnButton from '../../components/elements/buttons/BtnButton.tsx'

import SpawnableNodesImage from "../../../src/images/Spawnable Nodes Screenshot.png"
import InteractableUIImage from "../../../src/images/Interactable UI Screenshots.png"
import FixedGridImage from "../../../src/images/Fixed Grid Screenshot.png"
import SaveStateImage from "../../../src/images/Save State Screenshot.png"

function LoadPage() {
    const navigate = useNavigate();

    return (
        <div className='py-4'>
            <PageSection>
                <div className='bg-primary-light-s2l6 dark:bg-primary-dark-s2l3 p-2'>
                    <PageSection>
                        <br />
                        <TxtHeaderXL>Runtime Node Editor</TxtHeaderXL>
                        <br /><br />

                        <TxtBase>
                            An UI Node editor used in runtime applications for the purpose of visual programming.
                        </TxtBase>
                        <TxtBase>
                            Its origins date back during the development of my highlight project called Procedural Noise based Image Generator.
                            During its development a visual code editor was needed in order for the application to be properly used during runtime.
                        </TxtBase>
                        <br />

                        <TxtBase>
                            This project allowed me to build and deploy runtime applications that do not depend on the Unity Editor for core functionality.
                        </TxtBase>
                        <br />

                        <TxtHeader>Features</TxtHeader>
                        <br />

                        <LeftImageContent
                            image={SpawnableNodesImage}
                            imageAlt='Spawnable Nodes'
                            title='Spawnable Nodes'
                            summary='With a built-in dropdown menu allowing for the addition of all available nodes into the graph for the use of visual programming.'
                        />

                        <CenteredImageContent
                            image={InteractableUIImage}
                            imageAlt='Interactable UI'
                            title='Interactable UI Input Elements'
                            summary='Allows the need for dynamic programming throughout the entire graph.' />

                        <RightImageContent
                            image={FixedGridImage}
                            imageAlt='Consistent Grid'
                            title='Consistent Grid Background'
                            summary='Does not matter what zoom level or where the camera is located, the background grid remains consistent..'
                        />

                        <CenteredImageContent
                            image={SaveStateImage}
                            imageAlt='Save States'
                            title='Save States'
                            summary='Save the node graph to disk for future work.' />
                    </PageSection>

                    <BtnButton
                        text='Back'
                        id=''
                        className=''
                        onAction={() => navigate('/home')} />
                </div>

            </PageSection>
        </div>
    )
}

export default LoadPage;