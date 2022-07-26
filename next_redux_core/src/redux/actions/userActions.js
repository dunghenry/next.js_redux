export const setUser = (data) => dispatch => {
    dispatch({
        type: "SET_USER",
        payload: data
    })
}