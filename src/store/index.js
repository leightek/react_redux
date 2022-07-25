import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: 0},
    reducers: {
        increment(state, action) {
            state.counter++;  // not allowed hard-coded value
        },
        decrement(state, action) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        }

    }

})

// const reducerFn = (state = {counter: 0}, action) => {
//     // Synchronous Function
//     // should not mutate the original state
//     if (action.type === "INC") {
//         return {counter: state.counter + 1};   // ++ not working
//     }

//     if (action.type === "DEC") {
//         return {counter: state.counter - 1};
//     }

//     if (action.type === "ADD") {
//         return {counter: state.counter + action.payload}
//     }

//     return state;
// }

export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
});
export default store;