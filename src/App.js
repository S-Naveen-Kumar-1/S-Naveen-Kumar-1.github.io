import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AboutSection } from './Components/AboutSection';
import { Home } from './Components/Home';
import { Skills } from './Components/Skills';
import { Contacts } from './Components/Contacts';
import { ProjectsSection } from './Components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutSection />
      <Skills/>
      <ProjectsSection/>
      <Contacts/>
    </div>
  );
}

export default App;
