import React from 'react'

function Card(props) {
  
  return (
    <div className="card">
            <div className='favorite' onClick={props.onFavorite}>
            <img src="/img/unliked-heart.svg" alt=""  />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="" />
            <h5>{props.title}</h5>
            <div className='d-flex justify-between '>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>{props.price}</b>
              </div>
              <button className='button' onClick={props.onPlus}>
                <img width={12} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
  )
}

export default Card