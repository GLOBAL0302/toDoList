import React from "react";

interface Props{
    readTask:React.ChangeEventHandler<HTMLInputElement>;
    addTask:React.MouseEventHandler;
}

const AddTaskForm: React.FC<Props> = ({readTask,addTask}) => {
  return(
      <div className="taskForm">
          <input type="text" onChange={readTask}/>
          <button type="submit" onClick={addTask}>Add Task</button>
      </div>
  );
}

export default AddTaskForm;