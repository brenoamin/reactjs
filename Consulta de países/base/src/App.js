import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [paises, setPaises] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3/all`)
      .then((resposta) => resposta.json())
      .then((data) => setPaises(data));
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      {paises
        .filter((pais) =>
          pesquisa !== ""
            ? pais.name.common === pesquisa || pais.altSpellings[0] === pesquisa
            : pais
        )
        .map((pais) => (
          <div className="paises" key={pais.name.common}>
            <h1>{pais.name.common}</h1>
            <img width="400px" src={pais.flags[0]} alt="" />
            <h2>{pais.region}</h2>
          </div>
        ))}
    </div>
  );
}

export default App;
