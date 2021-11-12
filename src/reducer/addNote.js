const initialState={
    list:[]
}

const addNoteReducer = (state=initialState , action) =>{
    
    switch(action.type){
        case "ADD_NOTE":
            const {date,title,desc} = action.payload;
            if(date && title && desc){
                return{
                    ...state,
                    list:[
                        ...state.list,
                        {
                            date:date,
                            title:title,
                            desc:desc
                        }
                    ]
                }
                
            }
            
        default:return state;
    }
}

export default addNoteReducer;