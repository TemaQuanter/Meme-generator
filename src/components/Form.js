import './Form.css';


function Form(props) {

    return (

        <form onSubmit={props.handleFormSubmit}>
            <div className="horizontal-flex">
                <input name="topText" id="input-top-text" type="text" placeholder="Top text" onChange={props.handleFormChange} value={props.formData.topText} />
                <input name="bottomText" id="input-bottom-text" type="text" placeholder="Bottom text" onChange={props.handleFormChange} value={props.formData.bottomText} />
            </div>
            <input id="submit-button" type="submit" value="Get a new meme picture 🖼️" />
        </form>

    );

}

export default Form;