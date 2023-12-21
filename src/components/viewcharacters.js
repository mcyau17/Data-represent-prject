import { useEffect, useState } from "react";
import axios from "axios";
import CharacterSheet from "./charactersheet";

function ViewCharacters() {
   
    const [data, setData] = useState([]);

  useEffect(
    ()=>{
        
        axios.get('http://localhost:4000/api/CharacterInfo')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )

    }, []
  );

  const Reload = (e)=>{
    axios.get('http://localhost:4000/api/CharacterInfo')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
  }

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <CharacterSheet mySheets={data} ReloadData={Reload}></CharacterSheet>
        </div>
    );

}

export default ViewCharacters;