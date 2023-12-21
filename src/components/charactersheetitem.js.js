import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CharacterSheetItem(props) {

    return (//creates the displayed card showing each feature of the character on the "My Characters" page
        <div>
            <Card>
                <Card.Header>{props.mySheet.name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.mySheet.image}></img>
                        <footer>
                            {props.mySheet.race 
                            }
                        </footer>
                        <footer>
                            {props.mySheet.mainclass
                            }
                        </footer>
                        <footer>
                            {props.mySheet.subclass
                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                {/* Displays the edit button and sends it the user to the edit page */}
                <Link to={'/editcharacters/'+props.mySheet._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={
                    (e)=>{
                        e.preventDefault();
                {/* Displays the delete button and removes the relevant character information*/}
            axios.delete('http://localhost:4000/api/CharacterInfo/'+props.mySheet._id)
                        .then((res)=>{
                            let reload = props.Reload();
                        })
                        .catch();
                    }
                }>Delete</Button>
            </Card>
        </div>
    );

}

export default CharacterSheetItem;