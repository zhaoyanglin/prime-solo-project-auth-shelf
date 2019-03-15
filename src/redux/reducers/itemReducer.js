const itemReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SHELF':
            return state = [action.payload];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default itemReducer;
