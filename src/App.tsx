import { Navbar } from './components/Navbar'; // <--- Import Navbar
import { Hero } from './components/Hero';
import { QuestLog } from './components/QuestLog';
import { SkillTree } from './components/SkillTree';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-slate-50 min-h-screen selection:bg-gold-200 selection:text-gold-900 font-body">
      {/* Pasang Navbar paling atas */}
      <Navbar /> 
      
      {/* Tambahkan id="hero" di sini untuk tombol Home */}
      <div id="hero">
        <Hero />
      </div>

      <QuestLog />
      <SkillTree />
      <Footer />
    </main>
  );
}

export default App;