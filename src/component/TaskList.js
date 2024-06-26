import './TaskList.css';
import Task from './Task';

export default function TaskList({ taskData, deleteTask, isDoneTask, updateTask }) {
  return (
    <div className="task_list">
      <Task taskData={taskData} deleteTask={deleteTask} isDoneTask={isDoneTask} updateTask={updateTask} />
    </div>
  );
}
