import { useState } from "react";
function Item({ name, children }) {
  const [contador, setContadorPlus] = useState(0);
  function acrescentar() {
    setContadorPlus(contador + 1);
  }
  function decrescer() {
    contador !== 0 && setContadorPlus(contador - 1);
  }
  return (
    <div className="card">
      <div className="card-image"></div>
      <h2>{name}</h2>
      <p>{children}</p>
      <div className="count-itens">
        <span className="count-lm" onClick={decrescer}>
          -
        </span>
        <span className="count">{contador}</span>
        <span className="count-lm" onClick={acrescentar}>
          +
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Item name="Hamburguer">
        Arcu, sagittis, ut lectus congue dapibus semper odio a, lobortis.
      </Item>
    </div>
  );
}

export default App;
