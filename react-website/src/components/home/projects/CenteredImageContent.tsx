import TxtBase from '../../elements/text/TxtBase';
import TxtBaseXL from '../../elements/text/TxtBaseXL';
import ContentSection from '../../../components/ContentSection';

const CenteredImageContent = ({ image, imageAlt, title, summary }) => {
    return (
        <>
            <TxtBaseXL>{title}</TxtBaseXL>
            <br />
            <TxtBase>{summary}</TxtBase>
            <br />
            <ContentSection>
                <img
                    src={image}
                    alt={imageAlt}
                    className='pointer-events-none'
                />
            </ContentSection>
            <br />
        </>
    )
}

export default CenteredImageContent