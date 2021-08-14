import { combineReducers } from "redux";
import { students } from "./students.reducer";
import { isLoading } from "./loading.reducer";

const rootReducer = combineReducers({
    students,
    isLoading,
});

export default rootReducer;
