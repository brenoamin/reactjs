import kelvin from "./assets/kelvin-costa.png";
import charles from "./assets/charles-santos.png";
import anna from "./assets/anna-bia.png";
import mario from "./assets/mario-hisashi.png";
function Social({ pic, name, username, followers, following }) {
  return (
    <div className="card">
      <img src={pic} alt="" />
      <h2>{name}</h2>
      <span className="username"> {username}</span>
      <span className="follow">
        {followers} seguidores <br />
        {following} seguindo
      </span>
    </div>
  );
}
function App() {
  const usuarios = [
    {
        id:1,
        name: kelvin,
        username:"@costa",
        pic:kelvin,
        followers:140,
        following:207
    },
    {
        id:2,
        name: "Charles Santos",
        username:"@charles.santos",
        pic:charles,
        followers:302,
        following:419
      },
      {
        id:3,
        name: "Anna Bia",
        username:"@anab",
        pic:anna,
        followers:842,
        following:150
      },
      {
        id:4,
        name: "Mario Hisashi",
        username:"@hisashi",
        pic:mario,
        followers:28,
        following:17
      },
  ];
  return (
    <div className="App">
      {usuarios.map(users=>{
          return <Social
          key={users.id}
          {...users}
          />
      })}
    </div>
  );
}
export default App;
