import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About'; 
import { QuestLog } from './components/QuestLog';
import { SkillTree } from './components/SkillTree';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-slate-50 min-h-screen selection:bg-gold-200 selection:text-gold-900 font-body">
      <Navbar /> 
      
      <div id="hero">
        <Hero />
      </div>

      <About /> 

      <QuestLog />
      <SkillTree />
      <Footer />
    </main>
  );
}

export default App;