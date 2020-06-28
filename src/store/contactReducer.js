const initState = {

}

const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_DETAILS':
            console.log('Your response has been recorded!', action.details)
            return state
        case 'ADD_DETAILS_ERROR':
            console.log('Add details error', action.err);
            return state
        default:
            return state

    }
}

export default contactReducer