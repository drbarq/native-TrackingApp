import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const signup = dispatch => {
    return ({ email, password }) => {
        // make api request to sign up with that email and password
        // if we sign up, modify the state and say we are authenticated 
        // if sign up fails, notify the user with an error message
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