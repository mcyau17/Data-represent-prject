import { useEffect, useState } from "react";
import axios from "axios";
import CharacterSheet from "./charactersheet";

function ViewCharacters() {
   //adds the ability to store data
    const [data, setData] = useState([]);

  useEffect(
    ()=>{
        
        //allows the page to gain access to the api
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
    //allows the page to gain access to the api
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

    return (//Displays your characters
        <div>
            <h2>Here are your characters</h2>
            <CharacterSheet mySheets={data} ReloadData={Reload}></CharacterSheet>
        </div>
    );

}

export default ViewCharacters;