import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

