import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary 📖</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a href="https://github.com/annegleichmann" target="_blank">
            Anne Gleichmann
          </a>{" "}
          is open-sourced on{" "}
          <a
            href="https://github.com/annegleichmann/dictionary-project"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://shecodes-dictionary-project-by-anne.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
