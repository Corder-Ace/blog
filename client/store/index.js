import { createStore, applyMiddleware, compose } from 'redux';

const defaultState = {
    test: '1',
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'TEST': {
        return Object.assign({}, state, {
            test: action.data,
        });
    }
    default:
        return state;
    }
};

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => (next) => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
        }
        return next(action);
    };
}


const storeEnhancers = compose(
    applyMiddleware(createThunkMiddleware()),
);
const store = createStore(reducer, storeEnhancers);
export default store;
