import close from "./assets/close.svg";
import cookie from "./assets/cookie.svg"
import {useState} from 'react'
function Alert({type, assist,children,message}){
  const [fechar, setFechar]=useState(true)
  function verificaCard(){
    setFechar(!fechar)
  }
  return(
    <div className={`card ${fechar ? "mostrar": "escondido"}`}>
        <img src={close} onClick={verificaCard} className="close" alt="close"/>
        <img className="icon" src={type} alt={assist} />
        <p>{children}</p>
        <button onClick={verificaCard} className="cookie">{message}</button>
      </div>
  );
}
function App() {
  return (
    <div className="App">
      <Alert message="Tudo bem!" type={cookie} assist={"cookie"}>Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.</Alert>
    </div>
  );
}

export default App;
