import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {name, about} = currentUser;

  const [userData, setUserData] = React.useState({name: '', about: ''})

  function handleUserDataChange(evt) {
    const {name, value} = evt.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  /* Отправить форму */
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser(userData);
  }

  React.useEffect(() => {
    setUserData({"name": name, "about": about})
  }, [name, about]);
  
  return(
    <PopupWithForm
      isOpen={props.isOpen}
      popupType={`profile`}
      title="Редактировать профиль"
      popupNameForm={`editform`}
      submitButtonText="Сохранить"
      onClose={props.onClose}
      onCloseClick={props.onCloseClick}
      onSubmit={handleSubmit}
    >
    <div className="popup__input-container">
      <input
        id="nameinput"
        type="text"
        className="popup__text popup__text_type_name"
        name="name"
        placeholder="Имя пользователя"
        minLength="2"
        maxLength="40"
        value={userData.name ? userData.name : ''}
        onChange={handleUserDataChange}
        required
      />
      <span className="popup__text-error nameinput-error"></span>
      <input
        id="aboutinput"
        type="text"
        className="popup__text popup__text_type_about"
        name="about"
        placeholder="О себе"        
        minLength="2"
        maxLength="200"
        value={userData.about ? userData.about : ''}
        onChange={handleUserDataChange}
        required
      />
      <span className="popup__text-error aboutinput-error" ></span>
    </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup;