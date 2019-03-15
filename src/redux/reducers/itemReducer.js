const itemReducer = (state = [], action) => {

    console.log('item reducer has action', action);
    switch (action.type) {
        case 'GET_SHELF':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default itemReducer;
