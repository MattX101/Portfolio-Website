import '../styles/SlidePanel.css';

const SlidePanel = () => {
    function loadURL(url) {
        window.location.href = "http://localhost:3000/" + url;
    }

    function toggle(value) {
        document.getElementById("slideOverlay").style.width = `${value}%`;

        var links = document.getElementsByClassName("linkText");
        for (var i = 0, length = links.length; i < length; i++)
            links[i].style.opacity = `${value}%`;
    }

    return (
        <div>
            <button id="slideButton" onClick={() => toggle('100')}>
                <b>Continue</b>
            </button>

            <div id="slideOverlay" className="overlay">
                <div className="overlay-content">
                    <br />

                    <p className="linkText" onClick={() => loadURL('home')}><b>Home</b></p>
                    <p className="linkText" onClick={() => loadURL('about')}><b>About Me</b></p>
                    <p className="linkText" onClick={() => loadURL('contact')}><b>Contact Me</b></p>

                    <br />
                    <br />

                    <p className="linkText" id="closeText" onClick={() => toggle('0')}><b>Close</b></p>

                    <br />
                </div>
            </div>
        </div>
    )
}

export default SlidePanel