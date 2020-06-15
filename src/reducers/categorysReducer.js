import notes from "../components/Notes/notes"

const initialState=[]
 
const categoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_CATEGORY':{
            return state.concat(action.payload)
        }
        case 'DELETE_CATEGORY':{
            return state.filter(category=>category._id!==action.payload._id)
        }
        case 'ADD_CATEGORY':{
            return [...state,action.payload]
        }
        case 'UPDATE_CATEGORY':{
           return state.map(category=>{
               if(category._id== action.payload._id){
                   return {...notes, ...action.payload}
               }
               else{
                   return {...notes}
               }
           })
        }
        default:{
            return [...state]
        }
    }
}
export default categoryReducer