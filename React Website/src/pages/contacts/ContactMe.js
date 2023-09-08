import MainPagesNavMenu from '../../components/MainPagesNavMenu.js'

function LoadPage() {
    return (
        <div className="contactMe">
            <MainPagesNavMenu title='Contact Me'
            activeLink='contact'/>
        </div>
    );
}

export default LoadPage;