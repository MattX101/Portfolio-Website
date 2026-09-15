import { useNavigate } from "react-router-dom";

import PageSection from '../../components/PageSection.tsx';
import LeftImageContent from '../../components/home/projects/LeftImageContent.tsx';
import RightImageContent from '../../components/home/projects/RightImageContent.tsx';
import CenteredImageContent from '../../components/home/projects/CenteredImageContent.tsx';
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
                        
                        <LeftImageContent
                            image={ColourImage}
                            imageAlt='Colour'
                            title='Colouring'
                            summary='Convert a grayscale image into a colour image.'
                        />

                        <CenteredImageContent
                            image={ColourConversionModesImage}
                            imageAlt='Colour Conversion'
                            title='Colour Conversion'
                            summary='Converts one Colour model to another (i.e. RGB to HSL)' />

                        <CenteredImageContent
                            image={BlendModesImage}
                            imageAlt='Colour Blending'
                            title='Colour Blending'
                            summary='Combines 2 colour images into 1 wholely diffrent image.' />
                        
                        <RightImageContent
                            image={CurvesImage}
                            imageAlt='Curves'
                            title='Curves'
                            summary='Leveraging standard math equations to generate a curve for use in other applications.'
                        />

                        <CenteredImageContent
                            image={FiltersImage}
                            imageAlt='Bluring and Sharpening'
                            title='Bluring & Sharpening'
                            summary='An applied filter directly to the image that visually effects the end result.' />

                        <br />
                        <TxtBaseXL>Serialisation</TxtBaseXL>
                        <br />
                        <TxtBase>Write any data straight to the disk.</TxtBase>
                        <br />

                        <CenteredImageContent
                            image={NoiseImage}
                            imageAlt='Noise Generaion'
                            title='Noise Generaion'
                            summary='Not just the standard Perlin Noise, with various Noise types along with different Fractal patterns achieve near endless possibilities.' />
                        
                        <LeftImageContent
                            image={MaskImage}
                            imageAlt='Masks'
                            title='Masks'
                            summary='With a modified circle equation,
                                    complex masks can be generated for the use of
                                    modifying procedural data generated via noise.'
                        />
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