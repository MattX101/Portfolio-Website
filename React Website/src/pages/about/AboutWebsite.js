import MainPagesNavMenu from '../../components/MainPagesNavMenu.js'

function LoadPage() {
    return (
        <div className="aboutWebsite">
            <MainPagesNavMenu
                title='About Website'
                activeLink='about' />
        </div>
    );
}

export default LoadPage;