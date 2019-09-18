import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'


const SignupScreen = props => {
    const { state, signup } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({email, password}) => signup({email, password})}
            />
            <TouchableOpacity
                onPress={() => {props.navigation.navigate('Signin')}}
            >
                <Spacer>
                    <Text style={styles.link}>Already have an account?</Text>
                </Spacer>
            </TouchableOpacity>
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
    },
    link: {
        color: 'blue'
    }
})

export default SignupScreen




// SignupScreen.navigationOptions = () => {
//     return {
//         header: null
//     }
// }
// set it equal to a function to get access to navigation props