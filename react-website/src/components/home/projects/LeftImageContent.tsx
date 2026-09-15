import TxtBase from '../../elements/text/TxtBase';
import TxtBaseXL from '../../elements/text/TxtBaseXL';

const LeftImageContent = ({ image, imageAlt, title, summary }) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                    <img
                        src={image}
                        alt={imageAlt}
                        className='pointer-events-none'
                    />
                </div>
                <div>
                    <TxtBaseXL>{title}</TxtBaseXL>
                    <br />
                    <TxtBase>{summary}</TxtBase>
                </div>
            </div>
            <br />
        </>
    )
}

export default LeftImageContent