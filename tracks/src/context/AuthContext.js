import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'

const authReducer = (state, action) => {
    switch(action.type) {
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
            console.log(response.data)
        } catch(err) {
            console.log(err.response.data)
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
    { isSignedIn: false }
)