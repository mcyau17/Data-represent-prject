import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditCharacters() {
    let {id} = useParams();
// Allows for the editing and addition of the displayed variables
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [race, setRace] = useState('');
    const [mainclass, setMainClass] = useState('');
    const [subclass, setSubclass] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=>{
            //allows access to the api
            axios.get('http://localhost:4000/api/CharacterInfo/'+id)
            .then((response)=>{
                setName(response.data.name);
                setImage(response.data.image);
                setRace(response.data.race);
                setMainClass(response.data.mainclass);
                setSubclass(response.data.bio);
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        },[]
    );

    const handleSubmit = (e)=>{
        e.preventDefault();
//adds a variable for the array
        const CharacterInfo = {
            name:name,
            image:image,
            race:race,
            mainclass:mainclass,
            subclass:subclass
        }
//allows the code to replace old information in the api with new and updated information
        axios.put('http://localhost:4000/api/CharacterInfo/'+id, CharacterInfo)
        .then((res)=>{
            navigate('/viewcharacters');
        })
        .catch(
            (error)=>{
                console.log(error)
            });
    }
    return (//displays the prompts to edit each feature of the characters
        <div>
            <h2>Hello from Edit component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Character Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Character Image: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Character Race: </label>
                    <input type="text"
                        className="form-control"
                        value={race}
                        onChange={(e) => { setRace(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Character Main Class: </label>
                    <input type="text"
                        className="form-control"
                        value={mainclass}
                        onChange={(e) => { setMainClass(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Character Sub Class: </label>
                    <input type="text"
                        className="form-control"
                        value={subclass}
                        onChange={(e) => { setSubclass(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Edit Character">
                        </input>
                </div>
            </form>

        </div>
    );
}