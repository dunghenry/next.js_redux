const initialState = {
    user: {},
    loading: false,
    error: false,
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;