import CharacterSheetItem from "./charactersheetitem.js";

function CharacterSheet(props){

    return props.mySheets.map(
        (CharacterInfo)=>{
            return <CharacterSheetItem mySheet={CharacterInfo} key={CharacterInfo._id} Reload={()=>{props.ReloadData();}}></CharacterSheetItem>
        }
    );

}

export default CharacterSheet;