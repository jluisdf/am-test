import { combineReducers } from "redux";
import { characters } from "./characters.reducer";
import { isLoading } from "./loading.reducer";

const rootReducer = combineReducers({
    characters,
    isLoading,
});

export default rootReducer;
