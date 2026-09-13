import { useNavigate } from "react-router-dom";

import PageSection from '../../components/PageSection.tsx';
import TxtBase from '../../components/elements/text/TxtBase.tsx'
import TxtBaseXL from '../../components/elements/text/TxtBaseXL.tsx'
import TxtHeaderXL from '../../components/elements/text/TxtHeaderXL.tsx'
import TxtHeader from '../../components/elements/text/TxtHeader.tsx'
import BtnButton from '../../components/elements/buttons/BtnButton.tsx'

import NoiseImage from '../../../src/images/Noise Patterns.png'
import MaskImage from '../../../src/images/Mask.png'
import ColourImage from '../../../src/images/Colour.png'
import BlendModesImage from '../../../src/images/Blend Modes.png'
import ColourConversionModesImage from '../../../src/images/Colour Conversion.png'
import CurvesImage from '../../../src/images/Curves.png'
import FiltersImage from '../../../src/images/Filters.png'

function LoadPage() {
    const navigate = useNavigate();

    return (
        <div className='py-4'>
            <PageSection>
                <div className='bg-primary-light-s2l6 dark:bg-primary-dark-s2l3 p-2'>
                    <PageSection>
                        <br />
                        <TxtHeaderXL>MattX101 Utils</TxtHeaderXL>
                        <br /><br />

                        <TxtBase>A Utility library used by my other projects.</TxtBase>
                        <br />

                        <TxtBase>The reason this is its own project is due to ther desire to have single project where all the work is handled instead of the same functions deployed across multiple projects with their own modifications.</TxtBase>
                        <br />

                        <TxtHeader>Features</TxtHeader>

                        <br />
                        <TxtBaseXL>Colouring</TxtBaseXL>
                        <br />
                        <TxtBase>Convert a grayscale image into a colour image.</TxtBase>
                        <br />
                        <img
                            src={ColourImage}
                            alt='Colour'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Colour Conversion</TxtBaseXL>
                        <br />
                        <TxtBase>Converts one Colour model to another (i.e. RGB to HSL)</TxtBase>
                        <br />
                        <img
                            src={ColourConversionModesImage}
                            alt='Colour Conversion Modes'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Colour Blending</TxtBaseXL>
                        <br />
                        <TxtBase>Combines 2 colour images into 1 wholely diffrent image.</TxtBase>
                        <br />
                        <img
                            src={BlendModesImage}
                            alt='Colour Blending'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Curves</TxtBaseXL>
                        <br />
                        <TxtBase>Leveraging standard math equations to generate a curve for use in other applications.</TxtBase>
                        <br />
                        <img
                            src={CurvesImage}
                            alt='Curves'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Bluring & Sharpening</TxtBaseXL>
                        <br />
                        <TxtBase>An applied filter directly to the image that visually effects the end result.</TxtBase>
                        <br />
                        <img
                            src={FiltersImage}
                            alt='Bluring and Sharpening'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Serialisation</TxtBaseXL>
                        <br />
                        <TxtBase>Write any data straight to the disk.</TxtBase>
                        <br />

                        <br />
                        <TxtBaseXL>Noise Generaion</TxtBaseXL>
                        <br />
                        <TxtBase>
                            Not just the standard Perlin Noise, with various Noise types along with different Fractal patterns achieve near endless possibilities.
                        </TxtBase>
                        <br />
                        <img
                            src={NoiseImage}
                            alt='Noise Generaion'
                            className='pointer-events-none'
                        />

                        <br />
                        <TxtBaseXL>Masks</TxtBaseXL>
                        <br />
                        <TxtBase>
                            With a modified circle equation, 
                            complex masks can be generated for the use of 
                            modifying procedural data generated via noise.
                        </TxtBase>
                        <br />
                        <img
                            src={MaskImage}
                            alt='Masks'
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