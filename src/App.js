import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { charactersActions } from './redux/actions/characters.actions';
import './App.scss';
import profile from './resources/img/profile.png'
import Characters from './components/Characters';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import Loader from './components/Loader';

function App() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(charactersActions.get());
    }, []);

    return (
        <div className="body">
            { isLoading && <Loader /> }
            <div className="container">
                <Navbar />
                <Logo />
                <Filter />
                <Characters />
                <div className="show-on-small">
                    <Footer />
                </div>
                <RegisterModal />
            </div>
        </div>
    );
}

export default App;
