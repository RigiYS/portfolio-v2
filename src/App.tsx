import { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const About = lazy(() =>
  import("./components/About").then((module) => ({ default: module.About })),
);
const QuestLog = lazy(() =>
  import("./components/QuestLog").then((module) => ({
    default: module.QuestLog,
  })),
);
const SkillTree = lazy(() =>
  import("./components/SkillTree").then((module) => ({
    default: module.SkillTree,
  })),
);
const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({ default: module.Footer })),
);

const SectionLoader = () => (
  <div className="w-full h-40 flex items-center justify-center text-slate-400">
    Loading section...
  </div>
);

function App() {
  return (
    <main className="bg-slate-50 min-h-screen selection:bg-gold-200 selection:text-gold-900 font-body">
      <Navbar />

      <div id="hero">
        <Hero />
      </div>

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <QuestLog />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SkillTree />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
