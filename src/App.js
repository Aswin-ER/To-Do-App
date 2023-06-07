
import "./App.css";
import { useState } from "react";

function App() {

  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  const date = new Date();
  const options = {weekday: 'long'};
  const weekday = date.toLocaleDateString(undefined, options);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {weekday} {date.toLocaleDateString()} 🌝☕</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)}  type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=> setTodos([...toDos, {id: Date.now(), text: toDo, status: false}])} className="fas fa-plus"></i>
      </div>

      <div className="todos">
      { 

      toDos.map((obj)=> {
       return ( 
        <div className="todo">
          <div className="left">
            <input onChange={(e)=> {
              setTodos(toDos.filter(obj2=>{
                if(obj2.id === obj.id){
                  obj2.status = e.target.checked
                }
                return obj2;
              }))
            }} value={obj.status} type = "checkbox" name= "" id="" />
            <p className="completed" style={{textDecoration: obj.status ? 'line-through' : 'none'}}>{obj.text}</p>
          </div>

          <div className="right">
            <i onClick={()=> {setTodos(toDos.filter(obj2=> obj2.id !== obj.id));}}className="fas fa-times"></i>
          </div>
        </div>
       )
      })
      }

        <button className="remove" onClick={()=> {
          setTodos([])
        }}>Remove all</button>
      
      </div>

    </div>
  );
}

export default App;
