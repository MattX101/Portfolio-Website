import MainPagesNavMenu from '../../components/MainPagesNavMenu.js'

function LoadPage() {
    return (
        <div className="home">
            <MainPagesNavMenu 
            title='Home'
            activeLink='home'/>
        </div>
    );
}

export default LoadPage;