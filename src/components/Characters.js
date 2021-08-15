import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Character from './Character';

const Characters = (props) => {

    const { characters, filter } = useSelector(state => state.characters);
    const [ filteredCharacters, setFilteredCharacters ] = useState(characters);

    useEffect(() => {
        let newCharacters = characters;
        if(filter && filter === 'student') {
            newCharacters = (characters.filter(character => character.hogwartsStudent));
        }else if(filter && filter === 'staff'){
            newCharacters = (characters.filter(character => !character.hogwartsStudent));
        }
        setFilteredCharacters(newCharacters);
    }, [characters, filter]);

    return (
        <div className="row mt-5">
            <div className="col-12 col-md-10 offset-md-1">
                <div className="row">
                    { filteredCharacters && filteredCharacters.length > 0 ?
                        filteredCharacters.map((character, i) =>
                            <div className="col-6" key={i}>
                                <Character character={character} />
                            </div>
                        )
                    :
                        <div className="alert alert-warning text-center" role="alert">
                            <strong>Sin registros</strong>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Characters
