import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = props => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input 
                label="Email"
            />
            <Spacer />
            <Input 
                label="Password"
            />
            <Spacer>
                <Button 
                    title="Sign Up"
                />
            </Spacer>
        </View>
    )
}

// SignupScreen.navigationOptions = () => {
//     return {
//         header: null
//     }
// }
// set it equal to a function to get access to navigation props

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