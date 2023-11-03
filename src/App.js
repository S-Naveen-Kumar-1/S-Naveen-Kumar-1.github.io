import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AboutSection } from './Components/AboutSection';
import { Home } from './Components/Home';
import { Skills } from './Components/Skills';
import { Contacts } from './Components/Contacts';
import { ProjectsSection } from './Components/ProjectsSection';
import { GitStats } from './Components/GitStats';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutSection />
      <Skills/>
      <ProjectsSection/>
      <GitStats/>
      <Contacts/>
    </div>
  );
}

export default App;
