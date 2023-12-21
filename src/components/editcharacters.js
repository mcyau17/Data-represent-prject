import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditCharacters() {
    let {id} = useParams();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [race, setRace] = useState('');
    const [mainclass, setMainClass] = useState('');
    const [subclass, setSubClass] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=>{

            axios.get('http://localhost:4000/api/CharacterInfo/'+id)
            .then((response)=>{
                setName(response.data.name);
                setImage(response.data.image);
                setRace(response.data.race);
                setMainClass(response.data.mainclass);
                setSubClass(response.data.subclass);
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

        const CharacterInfo = {
            name:name,
            image:image,
            race:race,
            mainclass:mainclass,
            subclass:subclass
        }

        axios.put('http://localhost:4000/api/CharacterInfo/'+id, CharacterInfo)
        .then((res)=>{
            navigate('/viewcharacters');
        })
        .catch(
            (error)=>{
                console.log(error)
            });
    }
    return (
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
                        onChange={(e) => { setSubClass(e.target.value) }}
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