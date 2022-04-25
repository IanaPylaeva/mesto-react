import React from "react";

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  } 

  return (    
    <div id="elementtemplate">
      <div className="element">
        <img src={card.link} alt={card.name} className="element__mask-group" onClick={handleClick} />
        <button type="button" aria-label="Удалить" className="element__delete"></button>
        <figcaption className="element__group">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__likes-counter">
            <button type="button" aria-label="Лайк" className="element__like"></button>
            <p className="element__likes-number">0</p>
          </div>
        </figcaption>
      </div>
    </div>
  )
}

export default Card;