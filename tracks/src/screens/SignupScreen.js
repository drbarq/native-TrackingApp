import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext} from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SignupScreen = (props) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({email, password}) => signup({email, password})}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead"
            />
        </View>
    )
}

SignupScreen.navigationOptions = {
        header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
})

export default SignupScreen




// SignupScreen.navigationOptions = () => {
//     return {
//         header: null
//     }
// }
// set it equal to a function to get access to navigation props