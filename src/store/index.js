import { createStore } from 'redux';

const intitialState = {
    count: 10,
    // contoh: 7
};
const reducer = (state = intitialState, action) => {
    console.log('reducer berjalan', state);
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });
        case 'DECREMENT':
            return Object.assign({}, state, { count: state.count - 1 });
        default: return state;
    }

    // return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;