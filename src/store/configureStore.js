import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../reducers/notesReducer'
import categoryReducer from '../reducers/categorysReducer'

const configureStore=()=>{
    const store = createStore(combineReducers({
        notes:notesReducer,
        category:categoryReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore
