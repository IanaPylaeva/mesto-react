import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAreYouSurePopupOpen, setIsAreYouSurePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true);
  }
  function handleAreYouSureClick(){
    setIsAreYouSurePopupOpen(true);
  }
  function handleCardClick(card){
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAreYouSurePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onAreYouSure={handleAreYouSureClick}
      />
      <Footer />

      <PopupWithForm isOpen={isEditProfilePopupOpen} popupType={`profile`} name={`change`} title="Редактировать профиль" popupNameForm={`editform`}
       submitButtonText="Сохранить" onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input id="name-input" type="text" className="popup__text popup__text_type_name" name="name" placeholder="Имя пользователя" required minLength="2" maxLength="40" />
          <span className="popup__text-error name-input-error"></span>
          <input id="about-input" type="text" className="popup__text popup__text_type_about" name="about" placeholder="О себе" required minLength="2" maxLength="200" />
          <span className="popup__text-error about-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} popupType={`card-add`} name={`place`} title="Новое место" popupNameForm={`addform`}
       submitButtonText="Создать" onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input id="placename-input" type="text" className="popup__text popup__text_type_place" name="name" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__text-error placename-input-error"></span>
          <input id="placelink-input" type="url" className="popup__text popup__text_type_link" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__text-error placelink-input-error"></span>
        </div>
      </PopupWithForm>
      
      <PopupWithForm isOpen={isEditAvatarPopupOpen} popupType={`update-avatar`} name={`avatar`} title="Обновить аватар" popupNameForm={`avatarform`}
       submitButtonText="Сохранить" onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input id="avatarlink-input" type="url" className="popup__text popup__text_type_avatar" name="link" placeholder="Ссылка на изображение" required />
          <span className="popup__text-error avatarlink-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm isOpen={isAreYouSurePopupOpen} popupType={`deleteask`} name={`deletesure`} title="Вы уверены?" popupNameForm={`deletesureform`}
       submitButtonText="Да" onClose={closeAllPopups}>
      </PopupWithForm>
      
      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

    </div>
  );
}

export default App;