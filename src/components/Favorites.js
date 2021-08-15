import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { charactersActions } from '../redux/actions/characters.actions';

const Favorites = () => {

    const { characters } = useSelector(state => state.characters);
    const [ favorites, setFavorites ] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        if(characters && Object.keys(characters).length > 0){
            let newFavorites = characters.filter(character => character.favorite);
            setFavorites(newFavorites);
        }
    }, [characters]);

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bkgd-purple" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favoritos <i className="far fa-bookmark"></i>
            </button>
            <ul className="dropdown-menu mt-n5 dropdown-favorites" aria-labelledby="dropdownMenuButton1">
                { favorites && favorites.length > 0 ?
                    favorites.map((favourite, i) =>
                        <li key={i} className="dropdown-item cursor-pointer" onClick={() => dispatch(charactersActions.deleteFavorite(favourite))}>
                            <div className="row">
                                <div className="col-2">
                                    <img className="rounded-circle circle mini-circle" src={favourite.image} alt={favourite.name} data-holder-rendered="true" />
                                </div>
                                <div className="col-8 color-white">
                                    {favourite.name}
                                </div>
                                <div className="col-2 color-white">
                                    <i className="far fa-trash-alt"></i>
                                </div>
                            </div>
                        </li>
                    )
                :
                    <li className="dropdown-item disabled color-white">No hay favoritos.</li>
                }
            </ul>
        </div>
    )
}

export default Favorites
