import css from "./TaskCounter.module.css";
// Import the hook
import { useSelector } from "react-redux";
import { getActiveTaskCount, getCompletedTaskCount } from '../../redux/filters/selectors';

export const TaskCounter = () => {
    const activeCount = useSelector(getActiveTaskCount);
    const completedCount = useSelector(getCompletedTaskCount);

    return (
        <div>
            <p className={css.text}>Active: {activeCount}</p>
            <p className={css.text}>Completed: {completedCount}</p>
        </div>
    );
};