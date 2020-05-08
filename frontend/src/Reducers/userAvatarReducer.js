import { GET_SEARCHES } from '../Actions/types';

const initialState = {
    avatar: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SEARCHES:
            return  action 
        default: return state;
    }

}