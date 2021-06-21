import './App.css';
import React,{useState,useEffect} from 'react';
import db from './Firebase'
import firebase from 'firebase';


// https://todo-80d71.web.app


function App() {

  const [Task, setTask] = useState('')
  const [Todo, setTodo] = useState([])

  useEffect(() => {
    // once we refresh the page it will call the the all the task from the database
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodo(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
  }, [])

  const addTodo = (e)=>{
    //adding Task to firebase database realtime
    db.collection('todos').add({
      todo:Task,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodo([...Todo,Task])
    setTask('')
  }
  return (
    <div className="App"> 
      <h1>Let's Create TODO App</h1>
      <input type="text" value={Task} onChange={e=> setTask(e.target.value)} />
      <button onClick={addTodo} disabled={!Task}>Add</button>

      <ul>
        {
          Todo.map(t=>(
            <div className='task-list'>
              <li>{t.todo}</li>
              <button onClick={e=>{
                db.collection('todos').doc(t.id).delete()
              }
            }>X</button>
            </div>
            
            
          ))
        }
      </ul>
    </div>
  );
}

export default App;
