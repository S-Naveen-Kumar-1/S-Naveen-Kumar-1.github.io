import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AboutSection } from './Components/AboutSection';
import { Home } from './Components/Home';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contacts } from './Components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutSection />
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
