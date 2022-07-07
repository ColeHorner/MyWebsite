import './App.css';
import Header from './Header.js';
import Projects from './Projects';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';

function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </>
    )
}

export default App;