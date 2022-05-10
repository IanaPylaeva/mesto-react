import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const ref = React.useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();// Запрещаем браузеру переходить по адресу формы - не перезагружается

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({
      avatar: ref.current.value
    });
  }
 
  React.useEffect(() => {
    ref.current.value = '';
  }, [props.isOpen]);

  return(
    <PopupWithForm
      isOpen={props.isOpen}
      popupType={`update-avatar`}
      title="Обновить аватар"
      popupNameForm={`avatarform`}
      submitButtonText="Сохранить"
      onClose={props.onClose}
      onCloseClick={props.onCloseClick}
      onSubmit={handleSubmit}
    >
    <div className="popup__input-container">
      <input
        ref={ref}
        id="avatarlink"
        type="url"
        className="popup__text popup__text_type_avatar"
        name="avatar"
        placeholder="Ссылка на изображение"
        required
      />
      <span className="popup__text-error avatar-error"></span>
    </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;