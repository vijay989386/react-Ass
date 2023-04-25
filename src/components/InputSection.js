import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';
import './inputSection.style.scss';
const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const category = useSelector(state => state.inputs.category);
  const content = useSelector(state => state.inputs.content);
  const like = useSelector(state => state.inputs.like);
  const dispatch = useDispatch();
  

  const addNote = () => {
      if (title !== '' && content !== '' && category !== '') {
          dispatch(noteActions.addNote({
              title,
              category,
              content,
              like
          }))

          dispatch(inputActions.resetInputs())
          alert("Successfully blog created");
      } else {
          alert("Re-Enter value ! ");
      }


    
  }
  const updateNote = () =>{
      if (title !== '' && content !== '' && category !== '') {
          dispatch(noteActions.updateNote(id, {
              title, content, category
          }))
          dispatch(inputActions.resetInputs(id))
          alert("Successfully blog Update");

      }
      else {
          alert("Something is  wrong ! please reenter value ");
      }
    
  }
    const deleteNote = () => {
        if (window.confirm('Are you sure to delete blog')) {
            dispatch(noteActions.deleteNote(id))
            dispatch(inputActions.resetInputs())
            alert("Successfully blog Delete");

        } else {
            alert("Blog delete cancel");

        }
  }
  return (
      

      <div  >


          <button type="button" onClick="w3.hide('#myBlog')">add post!</button>
          <button type="button" >back!</button>

          <div id='myBlog' className="InputSection__container">
          <input
              type="text" 
              placeholder='Blog title' 
              value={title}
              onChange ={e => 
                dispatch(inputActions.setInputTitle(e.target.value))
              }
           />
        <input
            type="text"
            placeholder='Category'
            value={category}
            onChange={e =>
                dispatch(inputActions.setInputCategory(e.target.value))
            }
        />
          <textarea placeholder="Blog content"
          value={content}
          onChange ={e => 
            dispatch(inputActions.setInputContent(e.target.value))
          }
      
          >

          </textarea>

          <div
          className='InputSection__container__btnWrapper'
          >
        
        
            <button
                      onClick={id === -1 ? addNote : updateNote} style={{
                          marginLeft: '1em'
                          , backgroundColor: 'green'
                      }}
          >
            {id === -1 ? "ADD POST": "UPDATE POST"}
          </button>
      
          {id !== -1 &&
            <button
            onClick={deleteNote}
                      style={{
                          marginLeft: '1em'
                          , backgroundColor: 'red'
          }}
          >
            DELETE POST
          </button>
      
          }
      
           </div>
       </div> 
    </div>
  )
}

export default InputSection;
