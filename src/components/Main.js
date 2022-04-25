import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import {api} from "../utils/Api.js";

function Main(props) {

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  
  /* Одновременное получение данных пользователя и карточек */
  
  useEffect(() => { 
  Promise.all([api.getUserData(), api.getInitialCards()])
    .then((res) => {
      setCurrentUser(res[0]);
      setCards(res[1]);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [])

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__grid-container">
        <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar" />
        <button type="button" aria-label="Редактировать аватар" className="profile__edit-avatar" onClick={props.onEditAvatar}></button>
      </div>
      <div className="profile__profile-info">
        <h1 className="profile__title">{currentUser.name}</h1>
        <button type="button" aria-label="Редактировать" className="profile__edit-button" onClick={props.onEditProfile}></button>
        <p className="profile__subtitle">{currentUser.about}</p>
      </div>
      <button type="button" aria-label="Добавить" className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>
    <section className="elements">
      {cards.map((card) => {
        return (
        <Card
          key={card._id}
          card={card}
          onCardClick={props.onCardClick}
        />
        )})
      }
    </section>
    </main>
  )
}

export default Main;