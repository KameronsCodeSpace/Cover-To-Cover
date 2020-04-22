import { GET_SEARCHES } from './types'

export const getSearches = (searchTerm) => {
    return {
        type: GET_SEARCHES,
        text: searchTerm

    }
}
