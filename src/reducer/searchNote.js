import { searchNote } from "../actions";

const initialState = {
    searchItem:[]
}


const searchNoteReducer = (state=initialState , action) =>{
    switch(action.type){
        case "SEARCH_NOTE":
            const {arrayItem , searchVal} = action.payload;
            const SearchedItem = arrayItem.filter((currValue,index) =>{
                const val= currValue.toLowerCase();
                return val===searchVal;

            })
            console.log(SearchedItem);
            return{
                
                ...state,
                searchItem:[
                    ...state.searchItem ,
                    {
                        arrayItem:arrayItem
                    }
                ]
            }
        default:return state;
    }
}

export default searchNoteReducer;