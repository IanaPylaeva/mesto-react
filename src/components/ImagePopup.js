import React from "react";

const ImagePopup = ({card, onClose}) => {
  
  return(
    <div className={`popup popup_type_picture ${card.link ? "popup_opened" : ''}`}>
      <article className="popup__piccontainer">
        <img src={`${card.link}`} alt={`${card.name}`} className="popup__zoom" />
        <p className="popup__caption">{card.name}</p>
        <button type="button" aria-label="Закрыть" className="popup__button-close popup__button-close_type_zoom" onClick={onClose}></button>
      </article>
    </div>
  )
}

export default ImagePopup;