const initialState = {
    category: null,
    sortBy: 'popular'
}


export const filtersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CATEGORY':
            return{
                ...state,
                category: action.payload
            }
        case 'SET_SORT_BY':
            return {
                ...state, 
                sortBy: action.payload }
        default: return state
    }
}