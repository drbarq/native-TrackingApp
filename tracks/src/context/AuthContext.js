import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signup':
            return { errorMessage: '', token: action.payload }
        case 'add_error':
            return { ...state, errorMessage: action.payload } 
        default:
            return state
    }
}

const signup = dispatch => {
    return async ({ email, password }) => {
        // make api request to sign up with that email and password
        // if we sign up, modify the state and say we are authenticated 
        // if sign up fails, notify the user with an error message
        try {
            const response = await trackerApi.post('/signup', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token})
        } catch(err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
            // console.log(err.response.data)
        }
    }
}

const signin = dispach => {
    return ({ email, password }) => {
        // try to sign in
        // handle success by updating state 
        // handle failure with error message
    }
}

const signout = dispatch => {
    return () => {
        // somehow sign out 
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    {signin, signout, signup},
    { token: null, errorMessage: '' }
)