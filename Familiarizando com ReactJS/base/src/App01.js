import close from "./assets/close.svg";
import cookie from "./assets/cookie.svg";
import alert from "./assets/alert.svg";
function Alert({type,message, children}) {
  return (
    <div className="card">
      <img className="close" src={close} alt="fechar" />
      <img 
      className="icon" 
      src={type==="cookie" ? cookie : alert} 
      alt={type==="cookie" ? "Cookie" : "Alert"} />
      <p>
        {children}
      </p>
      <button className={type}>{message}</button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Alert type="cookie" message={"Tudo bem!"}>Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.</Alert>
      <Alert type="alert" message="Extender login">Você será deslogado <br/> imediatamente!</Alert>
    </div>
  );
}

export default App;
