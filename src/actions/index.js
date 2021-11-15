

export const addNote = (date,title,desc) =>{
    return{
        type:"ADD_NOTE",
        payload:{
            date:date,
            title:title,
            desc:desc
        }
    }
}

