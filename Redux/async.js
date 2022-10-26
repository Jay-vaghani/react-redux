const redux = require('redux')
const applyMiddleWare = redux.applyMiddleware
const thunk = require('redux-thunk').default
const createStore = redux.createStore
const axios = require('axios')



const initialState = {
    loading: false,
    users: [],
    error: ''
}


const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payLoad: user
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payLoad: error
    }
}

const reducer = (state = initialState, action) => {
    if (action.type === 'FETCH_USER_REQUEST') {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type === 'FETCH_USER_SUCCESS') {
        return {
            loading: false,
            users: action.payLoad
        }
    }
    if (action.type === 'FETCH_USER_FAILURE') {
        return {
            loading: false,
            users: [],
            error: action.payLoad
        }
    }
}


const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // response.data is the array of users
                // console.log(response.data.map((user) => user.id));
                const user = response.data.map((user) => user.id)
                dispatch(fetchUserSuccess(user))

            }).catch((error) =>{
                //error.message is error description 
                dispatch(fetchUserFailure(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleWare(thunk))


store.subscribe(() => console.log('Update State', store.getState()))

store.dispatch(fetchUser())
