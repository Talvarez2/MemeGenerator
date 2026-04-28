import React, { useState, useEffect } from "react";

function MemeGenerator() {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
    const [allMemeImgs, setAllMemeImgs] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                setAllMemeImgs(memes);
            });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * allMemeImgs.length);
        setRandomImg(allMemeImgs[randNum].url);
    }

    return (
        <main>
            <form className="meme-form" onSubmit={handleSubmit}>
                <label htmlFor="topText" className="sr-only">Top text</label>
                <input
                    id="topText"
                    type="text"
                    name="topText"
                    placeholder="Top text"
                    value={topText}
                    onChange={e => setTopText(e.target.value)}
                />
                <label htmlFor="bottomText" className="sr-only">Bottom text</label>
                <input
                    id="bottomText"
                    type="text"
                    name="bottomText"
                    placeholder="Bottom text"
                    value={bottomText}
                    onChange={e => setBottomText(e.target.value)}
                />
                <button type="submit">Generate</button>
            </form>
            <div className="meme">
                <img src={randomImg} alt="Generated meme" />
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{bottomText}</h2>
            </div>
        </main>
    );
}

export default MemeGenerator;
