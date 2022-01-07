import closedMenu from "./assets/closed-menu.svg";
import closeMenu from "./assets/open-menu.svg";
import home from "./assets/active-home.svg";
import likeIcon from "./assets/inactive-like.svg";
import settingIcon from "./assets/inactive-settings.svg";
import { useState } from "react";
import closeModal from "./assets/close-modal.svg";
import like from "./assets/like.svg";

import image1 from "./assets/gallery/image 1.png";
import image2 from "./assets/gallery/image 2.png";
import image3 from "./assets/gallery/image 3.png";
import image4 from "./assets/gallery/image 4.png";
import image5 from "./assets/gallery/image 5.png";
import image6 from "./assets/gallery/image 6.png";
import image7 from "./assets/gallery/image 7.png";
import image8 from "./assets/gallery/image 8.png";
import image9 from "./assets/gallery/image 9.png";
import image10 from "./assets/gallery/image 10.png";

function Modal({ handleLike, visibility, handleCloseModal, modal, setModal }) {
  const classe = visibility ? "show-modal" : "hide-modal";
  return (
    <div className={`modal ${classe}`}>
      <img
        className="x-modal"
        onClick={() => handleCloseModal((prev) => !prev)}
        src={closeModal}
        alt="fechar modal"
      />
      <div className="relative-modal">
        {modal.curtida && (
          <img className="like-modal" src={like} alt="Curtida" />
        )}
        <img
          onDoubleClick={(e) => {
            handleLike(modal.id, e);
            setModal(modal);
          }}
          className="pic-modal"
          src={modal.picture}
          alt=""
        />
      </div>
    </div>
  );
}
function AnimalUser({ pets, handleModal }) {
  return pets.map((pet) => (
    <div className="post">
      <picture>
        <img
          className="gallery"
          onClick={() => handleModal(pet)}
          src={pet.picture}
          alt="gallery-info"
        />
        <div className="likezin">
          {pet.curtida && (
            <img className="like-image" src={like} alt="Curtida" />
          )}
        </div>
      </picture>
      <div className="lower-text">
        <div className="first-text">
          <span>{pet.description}</span>
        </div>
        <div className="second-text">
          <span>{pet.time}</span>
        </div>
      </div>
    </div>
  ));
}

function App() {
  const [pets, setPets] = useState([
    {
      id: 1,
      picture: image1,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 2,
      picture: image2,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 3,
      picture: image3,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 4,
      picture: image4,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 5,
      picture: image5,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 6,
      picture: image6,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 7,
      picture: image7,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 8,
      picture: image8,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 9,
      picture: image9,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
    {
      id: 10,
      picture: image10,
      description: "Lorem Ipsum",
      time: " há 1 mês atrás",
      curtida: false,
    },
  ]);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState([]);
  const [openModal, setopenModal] = useState(false);
  function handleModal(pet) {
    setModal(pet);
    setopenModal((openModal) => !openModal);
  }
  function handleMenu() {
    setOpen(!open);
  }
  function handleLike(id, e) {
    e.preventDefault();
    e.stopPropagation();
    const petClick = pets.filter((pet) => pet.id === id);
    const indice = pets.findIndex((i) => i.id === petClick[0].id);
    console.log(indice);
    const newPets = pets.filter((i) => i.id !== petClick[0].id);
    petClick[0].curtida = !petClick[0].curtida;
    newPets.splice(indice, 0, petClick[0]);
    setPets(newPets);
    setModal(petClick);
  }
  return (
    <div className="App">
      <Modal
        className="modal"
        handleModal={handleModal}
        modal={modal}
        handleLike={handleLike}
        visibility={openModal}
        handleCloseModal={setopenModal}
        setModal={setModal}
      />
      <div className="tela">
        <div className="side-bar">
          <div className="menu">
            <div className="top-icon">
              <img
                onClick={handleMenu}
                src={open ? closeMenu : closedMenu}
                alt="Menu"
              />
            </div>
            <div className="home">
              <img src={home} alt="Home Icon" />
              <div className="text-bar">
                <h2 className={open ? "" : "hide"}>Início</h2>
              </div>
            </div>
            <div className="heart">
              <img src={likeIcon} alt="Coração" />
              <div className="text-bar">
                <h2 className={open ? "" : "hide"}>Favoritos</h2>
              </div>
            </div>
          </div>
          <div className="config">
            <img src={settingIcon} alt="Configuração" />
            <div className="text-bar">
              <h2 className={open ? "" : "hide"}>Configurações</h2>
            </div>
          </div>
        </div>
        <div className="right-side">
          <h1>Início</h1>
          <div className="feed">
            <AnimalUser handleModal={handleModal} pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
