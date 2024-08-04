import React from 'react';
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
// Import the hook
import { useSelector } from "react-redux";
import { getVisibleTasks } from "../../redux/filters/selectors";

export const TaskList = () => {
    const visibleTasks = useSelector(getVisibleTasks);

    return (
        <ul className={css.list}>
            {Array.isArray(visibleTasks) && visibleTasks.map(task => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task}/>
                </li>
            ))}
        </ul>
    );
};