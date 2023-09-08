import MainPagesNavMenu from '../../components/MainPagesNavMenu.js'

function LoadPage() {
    return (
        <div className="aboutMe">
            <MainPagesNavMenu title='About Me'
            activeLink='about'/>
        </div>
    );
}

export default LoadPage;