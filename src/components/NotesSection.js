import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import './NotesSection.style.scss';

const NotesSection = () => {
const dispatch = useDispatch();
const notes = useSelector(state => state.notes.notes)
const [ like, setCount] = useState(0);//inouo

const onItemClicked =(item, index) => {
  dispatch(inputActions.setInputId(index));
  dispatch(inputActions.setInputTitle(item.title));
  dispatch(inputActions.setInputCategory(item.category));
  dispatch(inputActions.setInputContent(item.content));
  dispatch(inputActions.setInputLike(item.like));
}
const onItemLicked = (item, index) => {
    // const LikeNumber = dispatch(inputActions.setInputLike(item.like));
    setCount( item.like++)
}
const onItemDislicked = (item, index) => {
    // const LikeNumber = dispatch(inputActions.setInputLike(item.like));
    setCount(item.like--)
}
if(notes.length ===0){
    return (
        <div className='NotesSection__container__empty'>
            <p>There is no notes available.</p>
        </div>
    )
}  

return (
    <div className='NotesSection__container'>
      
      


      {notes.map((item,index)=>{
        if(item){
          return (
            <>
            <div>

            </div>
                  <NoteItem
                      title={item.title}
                      category={item.category}
                      content={item.content}
                      like={item.like}
                      onItemClicked={() => {
                          onItemClicked(item, index);
                      }
                      }

                  /><br />
                  <div>
                      <img className="button-9" src="%PUBLIC_URL%/../likeIcon.png" onClick={() => onItemLicked(item, index)} width="50" height="60" alt="like Post" />
                      <i className="center">  You liked {item.like} times</i>
                      <img className="button-10" id="unlike" src="%PUBLIC_URL%/../UnLikeIcon.png" onClick={() => onItemDislicked(item, index)} width="50" height="60" alt="Unlike Post" />
                  </div>
                  <hr/>
        </> 
          )
        }
        return null;
      }
        
      )}
      
    </div>
  );
};

export default NotesSection
