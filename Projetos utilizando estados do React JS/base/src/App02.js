import kelvin from "./assets/kelvin-costa.png";
import { useState } from "react";
function Social({ pic, name, username, following }) {
  const [follow, setFollowButton] = useState(false);
  function seguir() {
    setFollowButton(!follow);
    contaFollowers();
  }
  const [seguidor, setFollowers] = useState(140);
  function contaFollowers() {
    follow ? setFollowers(seguidor - 1) : setFollowers(seguidor + 1);
  }
  return (
    <div className={`App ${follow ? "seguindo" : "seguir"}`}>
      <div className="card">
        <img src={pic} alt="kelvin profile" />
        <h2>{name}</h2>
        <span className="username">{username}</span>
        <span className="follow">
          {seguidor} seguidores <br />
          {following} seguindo
        </span>
      </div>
      <button onClick={seguir}>{follow ? "SEGUINDO" : "SEGUIR"}</button>
    </div>
  );
}
function App() {
  return (
    <Social
      pic={kelvin}
      name={"Kelvin Costa"}
      username={"@costa"}
      followers={140}
      following={207}
    >
      {" "}
      SEGUIR
    </Social>
  );
}

export default App;
