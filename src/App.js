import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <p>
        This project was coded by Chelsea D, is {""}
        <a
          href="https://github.com/Chelsjavis/react-week-four-homework"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
        {""} and {""}
        <a
          href="https://gilded-selkie-97fc46.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on netlify.
        </a>
      </p>
    </div>
  );
}
