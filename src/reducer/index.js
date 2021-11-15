import { combineReducers } from "redux";
import addNoteReducer from "./addNote";


const rootReducer = combineReducers(
    {
        addNoteReducer,
        
    }
);


export default rootReducer;