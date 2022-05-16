import login_logo from "./img/login_logo.png";
import Characters from "./components/Characters";
import "./App.css";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morthy</h1>
        {characters ? 
        (<Characters characters={characters} setCharacters={setCharacters}/>) : (
          <>
            <img src={login_logo} alt="Perfiles_img" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">Ir a catálogo</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
