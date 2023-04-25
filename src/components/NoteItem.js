import React from 'react'; 
import './NoteItem.styles.scss';
 
const NoteItem = ({ title,like, category,content, onItemClicked}) => {
  return (
    <div className='NoteItem__container'
      role="button"
      onClick={onItemClicked}
      >
          <h2>{title} </h2>
          <h4> <i>{category} </i></h4>
          <p><span>{content}</span></p>
          
    </div>
  )
}

export default NoteItem
