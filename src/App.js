import './App.css';

import Form from './components/Form';
import { useState, useEffect } from "react";


/**
 * @notice This is the function which displayes all the contntent on the main page
 * 
 * @returns The main content of the main page
 */
function App() {

    const [formData, setFormData] = useState({
        topText: "",
        bottomText: "",
        memeSource: ""
    });

    const [allMemes, setAllMemes] = useState([]);


    useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => setAllMemes(data.data.memes))
            .catch((error) => console.log(error));

    }, []);


    function handleFormChange(event) {

        setFormData((prevFormData) => {

            const { name, type, value, checked } = event.target;

            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }

        });

    }

    function getRandomMeme() {

        const ind = Math.floor(Math.random() * allMemes.length);

        return allMemes[ind];

    }

    function handleFormSubmit(event) {
        
        event.preventDefault();
        
        const { url } = getRandomMeme();

        setFormData((prevFormData) => {

            return {
                ...prevFormData,
                memeSource: getRandomMeme().url
            }

        })

    }

    return (
        <main>
            <Form handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} formData={formData} />
            <div id="meme-image">
                <img src={formData.memeSource} />
                <h1 className="meme-text" id="meme-top-text">{formData.topText}</h1>
                <h1 className="meme-text" id="meme-bottom-text">{formData.bottomText}</h1>
            </div>
        </main>
    );

}

export default App;
