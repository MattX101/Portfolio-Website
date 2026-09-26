import { useNavigate } from "react-router-dom";

import PageSection from '../../components/PageSection.tsx';
import LeftImageContent from '../../components/home/projects/LeftImageContent.tsx';
import CenteredImageContent from '../../components/home/projects/CenteredImageContent.tsx';
import TxtBase from '../../components/elements/text/TxtBase.tsx'
import TxtBaseXL from '../../components/elements/text/TxtBaseXL.tsx'
import TxtHeaderXL from '../../components/elements/text/TxtHeaderXL.tsx'
import TxtHeader from '../../components/elements/text/TxtHeader.tsx'
import BtnButton from '../../components/elements/buttons/BtnButton.tsx'

import NoiseImage from '../../../src/images/Noise Patterns.png'
import ColouringImage from '../../../src/images/Colouring.png'
import BlendingImage from '../../../src/images/Blend Modes.png'
import FiltersImage from '../../../src/images/Filters.png'

const tab = 'p-2 w-1/4 rounded-4xl ';
const colors = 'bg-primary-lightHighlight-s2l3 dark:bg-primary-darkHighlight-s2l3 ';
const hover = 'hover:bg-primary-lightHighlight-s1l6 dark:hover:bg-primary-darkHighlight-s1l1 ';
const redirectStyle = tab + colors + hover;

function LoadPage() {
    const navigate = useNavigate();

    const redirectToRepo = () => {
        window.location.href = "https://github.com/MattX101/Procedural-Noise-based-Image-Generator";
    };

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
                            Once coloured multiply images can be blended together to produce images that standard noise functions cannot possibly generate.
                            Lastly filters can be applied to further enchance the image to a desired outcome.
                        </TxtBase>
                        <br />

                        <TxtBase>
                            This project was inspired by my love of procedural content generation and how math can generate a seemily infinite data while still remaining predictable and understandable.
                        </TxtBase>
                        <br />

                        <BtnButton
                            text='Github Link'
                            id=''
                            className={redirectStyle}
                            onAction={() => redirectToRepo()} />
                        <br /><br />

                        <TxtHeader>Features</TxtHeader>
                        <br />

                        <CenteredImageContent
                            image={NoiseImage}
                            imageAlt='Noise'
                            title='Noise'
                            summary='Not just the standard Perlin Noise,
                            with various Noise types along with different
                            Fractal patterns achieve a near endless possibilities.' />

                        <LeftImageContent
                            image={ColouringImage}
                            imageAlt='Colouring'
                            title='Colouring'
                            summary='Whether a single colour or a more advanced multi-colour gradient,
                                    only your understanding of colour theory is the limit.'
                        />

                        <CenteredImageContent
                            image={BlendingImage}
                            imageAlt='Blending'
                            title='Blending'
                            summary='With over a dozen different blend modes unlock endless diffrent combinations of noise patterns.' />

                        <CenteredImageContent
                            image={FiltersImage}
                            imageAlt='Filters'
                            title='Filters'
                            summary='Further enhance your images with the given colour filters.' />

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
                        className={redirectStyle}
                        onAction={() => navigate('/home')} />
                </div>

            </PageSection>
        </div>
    )
}

export default LoadPage;