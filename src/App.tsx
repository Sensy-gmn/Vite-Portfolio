import "./App.css";
import { CardMe } from "./components/CardMe";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SectionCompetence } from "./components/SectionCompetence";
/**
 * @file App.tsx
 * @brief Main application component.
 *
 * This component renders the entire application.
 *
 * @author Alexandre Goumain
 */

function App() {
  /**
   * @returns The JSX representation of the application.
   */
  return (
    <>
      <div className="bg-slate-800">
        <Navbar />
        {/* container ALL (DISPLAY COLUMN) */}
        <div className="h-auto flex flex-col justify-center px-20 py-5 space-y-10 items-center">
          {/* Card with personal informations */}
          <CardMe />

          {/* Title competences */}
          <h2 className="text-4xl text-slate-200">MES COMPETENCES</h2>

          {/* programming languages and frameworks */}
          <SectionCompetence />

          {/* CONTENT CARDS */}
          {/* PROGRAMMATION...
                  [0 & 20]-->PYTHON & JAVA
                  [20 & 50]-->TYPESCRIPT & PHP
                  [50 & 70]-->JAVASCRIPT
                  [70 & 100]-->HTML & CSS


              FRAMEWORK...
                  [0 & 20]-->NEXT JS & MONGODB
                  [20 & 50]-->EXPRESS JS
                  [50 & 70]-->NODE JS & REACT JS
                  [70 & 100]-->TAILWINDCSS */}

          {/* Section for timeline */}
          <div className="h-auto flex flex-col justify-center px-20 py-5 space-y-10 items-center">
            {/* Title section timeline */}
            <h2 className="text-4xl text-slate-200">PARCOURS</h2>
            <h3 className="text-2xl text-red-400">
              <i>Timeline in dev...</i>
            </h3>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
