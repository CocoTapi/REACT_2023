import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { 
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter 
//         };
//     };

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter 
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter, 
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// };

//const store = createStore(counterReducer);

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
