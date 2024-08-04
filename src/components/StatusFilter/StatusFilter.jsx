import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
// Import the hook
import { useSelector, useDispatch } from "react-redux";
// Import the filter value object
import { statusFilters } from "../../redux/filters/constants";
// Import the action generator
import { setStatusFilter } from "../../redux/filters/actions";

export const StatusFilter = () => {
    // Get a link to the action dispatch function
    const dispatch = useDispatch();

    // Get filter value from Redux state
    const filter = useSelector(state => state.statusFilter);

    //  Call the action generator and pass the filter value
    // Sending the result - filter change action
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));
    
    return (
        <div className={css.wrapper}>
            <Button 
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
            >All</Button>
            <Button
                selected={filter === statusFilters.active}
                onClick={() => handleFilterChange(statusFilters.active)}
            >Active</Button>
            <Button 
                selected={filter === statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}
            >Completed</Button>
        </div>
    );
};