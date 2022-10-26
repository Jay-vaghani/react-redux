const BUY_CAKE = 'BUY_CAKE'
const BUY_IceCream = 'BUY_IceCream'
const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers


// // (previousState, action) => newState

// // const initialState = {
// //     numOfCakes: 10,
// //     numOfIceCream: 20
// // }


// const initialCakeState = {
//     numOfCakes: 10,
// }

// const initialIceCream = {
//     numOfIceCream: 20
// }

// function buyCake() {
//     return {
//         type: BUY_CAKE,
//     }
// }

// function buyIceCream() {
//     return {
//         type: BUY_IceCream,
//     }
// }

// // const reducer = (state = initialState, action) => {
// //     switch (action.type) {
// //         case BUY_CAKE:
// //             return {
// //                 ...state,
// //                 numOfCakes: state.numOfCakes - 1
// //             }
// //             break;

// //         case BUY_IceCream:
// //             return {
// //                 ...state,
// //                 numOfIceCream: state.numOfIceCream - 1
// //             }

// //         default: return state
// //             break;
// //     }
// // }

// const IceCreamReducer = (state = initialIceCream, action) => {

//     if (action.type = 'BUY_CAKE') {
//         return {
//             numOfIceCream: state.numOfIceCream - 1
//         }
//     } else {
//         return {
//             state
//         }
//     }
// }

// const cakeReducer = (state = initialCakeState, action) => {
//     switch (action.type) {
//         case BUY_IceCream:
//             return {
//                 numOfCakes: state.numOfCakes - 1
//             }
//             break;
//         default: return state
//             break;
//     }
// }

// rootReducer = combineReducer({
//     cake: cakeReducer,
//     iceCream: IceCreamReducer
// })



// const store = createStore(rootReducer)


// store.subscribe(() => console.log('Update State', store.getState()))

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())









