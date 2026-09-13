import { useNavigate } from "react-router-dom";

import PageSection from '../../components/PageSection.tsx';
import TxtBase from '../../components/elements/text/TxtBase.tsx'
import TxtBaseXL from '../../components/elements/text/TxtBaseXL.tsx'
import TxtHeaderXL from '../../components/elements/text/TxtHeaderXL.tsx'
import TxtHeader from '../../components/elements/text/TxtHeader.tsx'
import BtnButton from '../../components/elements/buttons/BtnButton.tsx'

import NoiseImage from '../../../src/images/Noise Patterns.png'
import ColouringImage from '../../../src/images/Colouring.png'
import BlendingImage from '../../../src/images/Blend Modes.png'
import FiltersImage from '../../../src/images/Filters.png'

function LoadPage() {
    const navigate = useNavigate();

    return (
        <div className='py-4'>
            <PageSection>
                <div className='bg-primary-light-s2l6 dark:bg-primary-dark-s2l3 p-2'>
                    <PageSection>
                        <br />
                        <TxtHeaderXL>Procedural Noise based Image Generator</TxtHeaderXL>
                        <br /><br />

                        <TxtBase>
                            With the power of noise functions an infinite number of noisy images can be generated.
                            Next they are sent to the colouring process, with an endless possibilites only ones understanding of colour theory is the limit.
                            Once coloured multiply images can be blended together to produce images that standard noise function only cannot possuibly generate.
                            Lastly filters can be applied to further enchance the image to a desired outcome.
                        </TxtBase>
                        <br />

                        <TxtBase>
                            This project was inspired by my love of procedural content generation and how math can generate a seemily infinite data while still remaining preditable and understandable.
                        </TxtBase>
                        <br />

                        <TxtHeader>Features</TxtHeader>

                        <br />
                        <TxtBaseXL>Noise</TxtBaseXL>
                        <br />
                        <TxtBase>
                            Not just the standard Perlin Noise, 
                            with various Noise types along with different 
                            Fractal patterns achieve near endless possibilities.
                        </TxtBase>
                        <br />
                        <img
                            src={NoiseImage}
                            alt='Noise'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Colouring</TxtBaseXL>
                        <br />
                        <TxtBase>
                            Whether a single colour or a more advanced multi-colour gradient, 
                            only your understanding in colour theory is the limit.
                        </TxtBase>
                        <br />
                        <img
                            src={ColouringImage}
                            alt='Colouring'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Blending</TxtBaseXL>
                        <br />
                        <TxtBase>
                            With over a dozen different blend modes unlock endless diffrent combinations of noise patterns.
                        </TxtBase>
                        <br />
                        <img
                            src={BlendingImage}
                            alt='Blending'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Filters</TxtBaseXL>
                        <br />
                        <TxtBase>
                            Further enhance your images with the given colour filters.
                        </TxtBase>
                        <br />
                        <img
                            src={FiltersImage}
                            alt='Filters'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Export</TxtBaseXL>
                        <br />
                        <TxtBase>
                            When finished export the final image to the disk.
                        </TxtBase>
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