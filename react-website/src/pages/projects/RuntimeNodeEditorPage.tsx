import { useNavigate } from "react-router-dom";

import PageSection from '../../components/PageSection.tsx';
import TxtBase from '../../components/elements/text/TxtBase.tsx'
import TxtBaseXL from '../../components/elements/text/TxtBaseXL.tsx'
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
                            A UI Node editor used in runtime applications for the purpose of visual programming.
                        </TxtBase>
                        <TxtBase>
                            Its origins date back during the development of my highlight project called Noise based Image Generator.
                            During its development a visual code editor was needed in order for the application to be properly used during runtime.
                        </TxtBase>
                        <br />

                        <TxtBase>
                            This project allowed me to build and deploy runtime applications that do not depend on the Unity Editor for core functionality.
                        </TxtBase>
                        <br />

                        <TxtHeader>Features</TxtHeader>

                        <br />
                        <TxtBaseXL>Spawnable Nodes</TxtBaseXL>
                        <br />
                        <TxtBase>With a built-in dropdown menu allowing for the addition of all available nodes into the graph for the use of visual programming.</TxtBase>
                        <br />
                        <img
                            src={SpawnableNodesImage}
                            alt='Spawnable Nodes'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Interactable UI Input Elements</TxtBaseXL>
                        <br />
                        <TxtBase>Allows the need for dynamic programming throughout the entire graph.</TxtBase>
                        <br />
                        <img
                            src={InteractableUIImage}
                            alt='Interactable UI'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Consistent Grid Background</TxtBaseXL>
                        <br />
                        <TxtBase>Does not matter what zoom level or where the camera is located, the background grid remains consistent.</TxtBase>
                        <br />
                        <img
                            src={FixedGridImage}
                            alt='Consistent Grid'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Save States</TxtBaseXL>
                        <br />
                        <TxtBase>Save the node graph to disk for future work.</TxtBase>
                        <br />
                        <img
                            src={SaveStateImage}
                            alt='Save States'
                            className='pointer-events-none'
                        />
                        <br />
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