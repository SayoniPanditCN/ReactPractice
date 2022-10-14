import CounterReducer from "./counter";
import ListReducer from "./ListData";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
    counter : CounterReducer,
    list : ListReducer
})

export default AllReducers
