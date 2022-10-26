const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducer = redux.combineReducers

const logger = reduxLogger.createLogger()
const applyMiddleWare = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_IceCream = 'BUY_IceCream'

// (previousState, action) => newState




// function buyCake() {
//     return {
//         type: BUY_CAKE
//     }
// }

// function buyIceCream() {
//     return {
//         type: BUY_IceCream
//     }
// }


// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }

// const reducer = (state = initialState, action) => {
//     if (action.type === 'BUY_CAKE') {
//         return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//     }
//     else if (action.type === 'BUY_IceCream') {
//         return {
//             ...state,
//             numOfIceCream: state.numOfIceCream - 1
//         }
//     }
//     else {
//         return state
//     }
// }

// const store = createStore(reducer, applyMiddleWare(logger))


// // store.subscribe(() => console.log('Update State', store.getState()))


// store.dispatch(buyCake())
// store.dispatch(buyIceCream())















function buyCake() {
    return {
        type: BUY_CAKE
    }
}

function buyIceCream() {
    return {
        type: 'BUY_IceCream'
    }
}

const initialCakeState = {
    numOfCake: 10
}

const initialIceCreamState = {
    numOfIceCream: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    if (action.type === 'BUY_CAKE') {
        return {
            numOfCake: state.numOfCake - 1
        }
    } else {
        return state
    }
}


const iceCreamReducer = (state = initialIceCreamState, action) => {
    if (action.type === 'BUY_IceCream') {
        return {
            numOfIceCream: state.numOfIceCream - 1
        }
    } else {
        return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = redux.createStore(rootReducer, applyMiddleWare(logger))

// store.subscribe(() => console.log('Update State', store.getState()))

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())









