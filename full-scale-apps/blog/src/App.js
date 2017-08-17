import React, {Component} from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Container from './container/Container';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>

                <Header/>

                <Container/>

                <Footer/>
            </div>
        );
    }
}

export default App;
