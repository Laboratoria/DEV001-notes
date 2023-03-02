import React, { useState, useEffect } from 'react';
import styles from '../estilos/Wall.module.css';
import  db  from "../firebase";
import { getDoc, doc } from 'firebase/firestore';


const WallForm = (props) => {

    const initialStateValues = {
        title: '',
        description: '',
    }

    const [values, setValues] = useState(initialStateValues);
    
    const handleInputChange = e => {
        const { name, value } = e.target;
        // evento que imprime la informacion evento por medio del e.target
        setValues({ ...values, [name]: value })
    
    }
    const handleSubmit = e => {
        e.preventDefault();
        // entender que hace props o que es
        props.addOrEditNote(values);
        setValues({ ...initialStateValues })
    };

    const getNoteById = async (id) => {
        const note = await getDoc(doc(db, 'notes', id))
        setValues({...note.data().textObject})
        console.log(note.data(id));
    }
// validacion, cuando cargue que haga la validacion del id actual 'props.currentId' es igual a  '' sig que esta actualizando y no guardando
    //useeffect recibe un callback y el callback recibe getnotesbyid
    useEffect(() => {
        if (props.currentId === '') {
            setValues({ ...initialStateValues });
        } else {
            getNoteById(props.currentId);
        }
        // eslint-disable-next-line 
    }, [props.currentId]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className={styles.titletext }>
            <div className="divTitle">
                <input value={values.title} type="text" onChange={handleInputChange} name='title' placeholder="Title"></input>
            </div>
                <div className="divtext">
                    <textarea value={values.description } onChange={handleInputChange} name='description'  placeholder="Your text here..." ></textarea>
                </div>
                <button className={styles.savebutton}>
                    {props.currentId === '' ? 'Save' : 'update'}
                </button>
            </div>
        </form>
    );

};
export default WallForm;