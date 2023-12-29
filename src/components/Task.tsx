import React from "react";

interface Props {
    key: string
    task: string
    removeTask: React.MouseEventHandler<HTMLButtonElement>;
}

const Task: React.FC<Props> = ({
                                   task,
                                   removeTask
}) => {
    return (
        <div className="task_element">
            <h4>{task}</h4>
            <button type="button" onClick={removeTask}>Delete</button>
        </div>
    );
};

export default Task;