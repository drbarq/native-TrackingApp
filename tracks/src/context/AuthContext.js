import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signout':
            return { errorMessage: '', token: null }
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'add_error':
            return { ...state, errorMessage: action.payload } 
        case 'clear_error_message':
            return { ...state, errorMessage: ''}
        default:
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if ( token ) {
        dispatch({type: 'signin', payload: token})
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }
}

const clearErrorMessage = dispach => () => {
    dispach({type: 'clear_error_message' })
}

const signup = dispatch => {
    return async ({ email, password }) => {
        // make api request to sign up with that email and password
        // if we sign up, modify the state and say we are authenticated 
        // if sign up fails, notify the user with an error message
        try {
            const response = await trackerApi.post('/signup', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token})
            navigate('TrackList')
        } catch(err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
            // console.log(err.response.data)
        }
    }
}

const signin = dispach => {
    return async ({ email, password }) => {
        // try to sign in
        // handle success by updating state 
        // handle failure with error message
        try {
            const response =  await trackerApi.post('/signin', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispach({type: 'signin', payload: response.data.token})
            navigate('TrackList')
        } catch(err) {
            dispach({type: 'add_error', payload: 'Something went wrong with login'})
        }
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout'})
    navigate('loginFlow')
}

export const { Context, Provider } = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage: '' }
)