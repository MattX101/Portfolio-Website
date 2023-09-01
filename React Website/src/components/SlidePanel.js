const SlidePanel = () => {
    function toggle(value) {
        document.getElementById("slideOverlay").style.width = `${value}%`;

        var links = document.getElementsByClassName("linkText");
        for (var i = 0, length = links.length; i < length; i++)
            links[i].style.opacity = `${value}%`;
    }

    return (
        <div>
            <button onClick={() => toggle('100')}><b>Continue</b></button>

            <div id="slideOverlay" className="overlay">
                <div className="overlay-content">
                    <br />

                    <p className="linkText"><b>Filler 1</b></p>
                    <p className="linkText"><b>Filler 2</b></p>
                    <p className="linkText"><b>Filler 3</b></p>
                    <p className="linkText"><b>Filler 4</b></p>

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