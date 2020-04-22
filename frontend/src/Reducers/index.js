import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
    search: searchReducer,
    auth: authReducer,
    error: errorReducer
})