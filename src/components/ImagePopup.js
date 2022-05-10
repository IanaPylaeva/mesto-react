import React from "react";

const ImagePopup = (props) => {
  return(
    <div className={`popup popup_type_picture ${props.card.link !== '' && "popup_opened"}`} onClick={props.onCloseClick}>
      <article className="popup__piccontainer">
        <img
          src={`${props.card ? props.card.link : ''}`}
          alt={`${props.card ? props.card.name : ''}`}
          className="popup__zoom"
        />
        <p className="popup__caption">{props.card ? props.card.name : ''}</p>
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__button-close popup__button-close_type_zoom"
          onClick={props.onClose}></button>
      </article>
    </div>
  )
}

export default ImagePopup;