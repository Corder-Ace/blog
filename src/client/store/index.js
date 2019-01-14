import { applyMiddleware, compose } from 'redux';
import createResetStore from '../utils/createResetStore';

export const defaultState = {
    test: '1',
    count: 2,
};
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'TEST': {
        return Object.assign({}, state, {
            test: action.data,
        });
    }
    case 'CHANGE': {
        return { ...state, count: action.count };
    }
    default:
        return state;
    }
};
// thunk 支持dispatch一个函数
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
const store = createResetStore(reducer, storeEnhancers);
export default store;
