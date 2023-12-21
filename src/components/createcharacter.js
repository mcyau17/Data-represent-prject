import { useState } from "react";
import axios from "axios";

function CreateCharacter() {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [race, setRace] = useState('');
    const [mainclass, setMainClass] = useState('');
    const [subclass, setSubClass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Name: "+name+
        " Image: "+image+
        " Race: "+race+
        " Main Class: "+mainclass+
        " Sub Class: "+subclass);

        const CharacterInfo = {
            name:name,
            image:image,
            race:race,
            mainclass:mainclass,
            subclass:subclass
        };

        axios.post('http://localhost:4000/api/CharacterInfo',CharacterInfo)
        .then()
        .catch();

    }
    // some comment
    return (
        <div>
            <h2>Create your character</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>What is your characters name?: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>What does your character look like?: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>What is your characters Race?: </label>
                    <input type="text"
                        className="form-control"
                        value={race}
                        onChange={(e) => { setRace(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>What is your characters Main Class?: </label>
                    <input type="text"
                        className="form-control"
                        value={mainclass}
                        onChange={(e) => { setMainClass(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>What is your characters Sub Class?: </label>
                    <input type="text"
                        className="form-control"
                        value={subclass}
                        onChange={(e) => { setSubClass(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Add Character">
                        </input>
                </div>
            </form>
        </div>
    );

}
export default CreateCharacter;