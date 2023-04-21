import React from 'react'
import "./card.css"
const Card = ({ props }) => {
  const handleLinkClick = () => {
    window.open(props.company.url, "_blank");
  };
  return (

    <div className="card">
      <img src={props.imageUrl} alt="not found" />
      <h2>{props.headline}</h2>

      <div className='headline' >{props.primaryText}</div>

      <p>{props.description}</p>
      <div className='button'>
        <button onClick={handleLinkClick}>{props.CTA}</button>
      </div>
    </div>

  )
}

export default Card