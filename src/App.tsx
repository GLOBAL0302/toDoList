import './App.css';
import AddTaskForm from './components/AddTaskForm';
import {useState} from "react";
import Task from "./components/Task";

interface Tasker{
  task: string;
  key: string;
}

function App() {
  const [myTask, setmyTask] = useState<Tasker[]>([
    {task:"need to wash clothes", key: "2023-12-29T08:57:16.046Z'"},
      {task:"Get home Work Done", key: "2023-12-29T08:55:16.046Z'"},
      {task:"Prepare for big adventure", key: "2023-12-29T08:53:16.046Z'"}]
  );

  let inputValue = "someText";
  const readTask = (e:React.ChangeEvent<HTMLInputElement>)=>{
    inputValue = e.target.value;
  };
  const addTask = ()=>{
    const now:Date  = new Date();
    const newTask:Tasker = {task: inputValue, key: now.toJSON()};
    myTask.push(newTask);
    //Here need to add func  which will refresh the list
  };

  let showTasks:React.ReactNode = null;
  if(myTask){
    showTasks = (
      <div>
          {myTask.map((oneTask:Tasker)=>{
            return(
              <Task
                  task={oneTask.task}
                  key={oneTask.key}/>
            );
          })}
      </div>
    );
  }

  return (
    <>
      <AddTaskForm
          readTask = {(e)=>readTask(e)}
          addTask = {()=>addTask()}
      />

      <div className="all_tasks">
          {showTasks}
      </div>
    </>
  );
}

export default App;
