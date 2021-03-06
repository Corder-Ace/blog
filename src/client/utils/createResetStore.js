import { createStore } from 'redux';

const RESET_ACTION_TYPE = '@@RESET';

const resetReducerCreator = (reducer, restState) => (state, action) => {
    if (action.type === RESET_ACTION_TYPE) {
        return restState;
    }
    return reducer(state, action);
};

const restore = (createBaseStore) => (reducer, preloadState, enhancer) => {
    const store = createBaseStore(reducer, preloadState, enhancer);

    const reset = (resetReducer, resetState) => {
        const newReducer = resetReducerCreator(resetReducer, resetState);
        store.replaceReducer(newReducer);
        store.dispatch({ type: RESET_ACTION_TYPE, state: resetState });
    };

    return {
        reset,
        ...store,
    };
};

export default restore(createStore);
