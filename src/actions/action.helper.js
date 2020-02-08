export  const dispatcher = (dispatch, type, data, loading=true) => dispatch({
    type,
    payload: {
        data,
        loading
    }
});
