import './App.css';
import AddTaskForm from './components/AddTaskForm';
import {useState} from "react";

interface Tasker{
  task: string;
  id: string;
}

function App() {
  const [myTask, setmyTask] = useState<Tasker[]>([
    {task:"need to wash clothes", id: "2023-12-29T08:57:16.046Z'"}]
  );

  let inputValue = "someText";
  const readTask = (e:React.ChangeEvent<HTMLInputElement>)=>{
    inputValue = e.target.value;
  };
  const addTask = ()=>{
    let now = new Date();
    let newTask:Tasker = {task: inputValue, id: now.toJSON()};
    myTask.push(newTask);
  };

  return (
    <>
      <AddTaskForm
          readTask = {(e)=>readTask(e)}
          addTask = {()=>addTask()}
      />
      <div className="all_tasks">
      </div>
    </>
  );
}

export default App;
