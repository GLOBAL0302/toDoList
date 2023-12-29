import React from "react";

interface Props{
    key: string
    task:string;
}

const Task:React.FC<Props> = ({task}) =>{
    return(
        <div className="task_element">
            <h4>{task}</h4>
        </div>
    );
};

export default Task;