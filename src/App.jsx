import './App.scss'
import Topbar from './components/top/Topbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Work from './components/current/Work';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbarr'
function App() {
    return(
        <div className="app">
            <Topbar/>
            <div className="sections">
                <About/>
                <Work/>
                <Education/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;