import {MdClose} from "react-icons/md";
import css from "./Task.module.css";
// Import the hook
import { useDispatch } from "react-redux";
// Import the action generator'
import { deleteTask, toggleCompleted } from "../../redux/tasks/actions";

export const Task = ({task}) => {
    // Get a link to the action dispatch function
    const dispatch = useDispatch();

    // Call the action generator and pass the task ID
    // Send the result - task delete action
    const handleDelete = () => dispatch(deleteTask(task.id));

    // Call the action generator and pass the task ID
    // Send the result - action to switch task status
    const handleToggle = () => dispatch(toggleCompleted(task.id));

    return (
        <div className={css.wrapper}>
            <input
                type="checkbox"
                className={css.checkbox}
                checked={task.completed}
                onChange={handleToggle}
            />
            <p className={css.text}>{task.text}</p>
            <button className={css.btn} onClick={handleDelete}>
                <MdClose size={24}/>
            </button>
        </div>
    );
};