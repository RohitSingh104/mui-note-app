import { combineReducers } from "redux";
import addNoteReducer from "./addNote";
import searchNoteReducer from "./searchNote";

const rootReducer = combineReducers(
    {
        addNoteReducer,
        searchNoteReducer
    }
);


export default rootReducer;