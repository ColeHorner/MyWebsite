import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
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