import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { charactersActions } from './redux/actions/characters.actions';
import './App.scss';
import profile from './resources/img/profile.png'
import Characters from './components/Characters';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Footer from './components/Footer';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(charactersActions.get());
    }, []);

    return (
        <div className="body">
            <div className="container">
                <Navbar />
                <Logo />
                <Filter />
                <Characters />
                <Footer />
            </div>
        </div>
    );
}

export default App;
