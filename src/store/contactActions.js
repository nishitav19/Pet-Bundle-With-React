export const addDetails = (details) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore()
        firestore.collection('details').add({
            ...details,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_DETAILS', details })
        }).catch((err) => {
            dispatch({ type: 'ADD_DETAILS_ERROR', err })
        })
    }
}
