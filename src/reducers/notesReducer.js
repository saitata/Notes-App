const initailState = []
const notesReducer =(state=initailState,action)=>{
    switch(action.type){
        case "SET_NOTES":{
            return state.concat(action.payload)
        }
        case "DELETE_NOTES":{
            return state.filter(notes=>notes._id!=action.payload._id)
        }
        case "CREATE_NOTES":{
            return [...state, action.payload]
        }
        case "UPDATE_NOTES":{
            return state.map(notes=>{
                    if(notes._id== action.payload._id){
                        return{...notes, ...action.payload}
                    }
                    else{
                        return{...notes}
                    }
                })
            }

        default :{
            return [...state]
       }
  }
}

export default notesReducer