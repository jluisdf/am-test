import React from 'react';
import { useDispatch } from 'react-redux';
import { charactersActions } from '../redux/actions/characters.actions';

const Character = character => {

    const dispatch = useDispatch();
    const { id, image, name, dateOfBirth, gender, eyeColour, hairColour, house, alive, hogwartsStudent, favorite } = character.character;

    let colorCard = 'gradient-orange';
    switch (house) {
        case "Gryffindor":
            colorCard = 'gradient-orange';
        break;
        case "Slytherin":
            colorCard = 'gradient-green';
        break;
        case "Ravenclaw":
            colorCard = 'gradient-blue';
        break;
        case "Hufflepuff":
            colorCard = 'gradient-yellow';
        break;
    }

    let isAlive = alive ? 'VIVO' : 'FINADO';
    let isStudent = hogwartsStudent ? 'ESTUDIANTE' : 'STAFF';

    const setFavorite = () => {
        dispatch(charactersActions.addFavorite(character));
    }

    return (
        <div className="card mb-3 character-card">
            <div className="row g-0">
                <div className={`col-12 col-md-12 col-lg-5 gradient ${colorCard}`}>
                    <img className="rounded-circle circle" src={image} alt={name} data-holder-rendered="true" />
                </div>
                <div className="col-12 col-md-12 col-lg-7">
                    <div className="card-body pt-2">
                        <h5 className="card-title show-small">{name}</h5>
                        <label className="opacity-25 mb-2 fz-14">{isAlive} / {isStudent}</label>
                        {!favorite ?
                            <label
                                className="opacity-25 mb-2 float-end cursor-pointer"
                                onClick={setFavorite}
                            >
                                <i className="far fa-bookmark"></i>
                            </label>
                        :
                            <label
                                className="opacity-25 mb-2 float-end"
                            >
                                <i className="fas fa-bookmark"></i>
                            </label>
                        }
                        <h5 className="card-title hide-small">{name}</h5>
                        <ul className="list-unstyled fz-15 hide-small">
                            <li><b>Cumpleaños:</b> {dateOfBirth}0</li>
                            <li><b>Género:</b> {gender}</li>
                            <li><b>Color de ojos:</b> {eyeColour}</li>
                            <li><b>Color de pelo:</b> {hairColour}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character;
