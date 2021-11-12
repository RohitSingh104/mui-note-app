

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

export const searchNote = (noteArray,itemToBe) => {
    return {
        type:"SEARCH_NOTE",
        payload:{
            noteArray:noteArray,
            itemToBe:itemToBe
        }
    }
}