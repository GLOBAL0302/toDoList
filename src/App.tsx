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

  let inputValue = "";
  const readTask = (e:React.ChangeEvent<HTMLInputElement>)=>{
    inputValue = e.target.value;
  };
  const addTask = ()=>{
    if(inputValue){
        const now:Date  = new Date();
        const newTask:Tasker = {task: inputValue, key: now.toJSON()};
        const myTaskCopy:Tasker[] = [...myTask];
        myTaskCopy.push(newTask);
        setmyTask(myTaskCopy);
    }
  };

  const removeTask = (id:string)=>{
      const myTaskCopy:Tasker[] = [...myTask];
      myTaskCopy.forEach((value, index) => {
          if(value.key == id){
              myTaskCopy.splice(index, 1);
              setmyTask(myTaskCopy);
          }
      }
      );
  };

  let showTasks:React.ReactNode = null;
  if(myTask){
    showTasks = (
      <div>
          {myTask.map((oneTask:Tasker)=>{
            return(
              <Task
                  task={oneTask.task}
                  key={oneTask.key}
                  removeTask={()=>{
                      removeTask(oneTask.key);
                  }
              }/>
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
