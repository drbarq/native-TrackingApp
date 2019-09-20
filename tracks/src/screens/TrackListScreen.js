import React, {useContext} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'


const TrackListScreen = props => {
    const { state, fetchTracks } = useContext(TrackContext)

    console.log(state)

    return (
        <>
            <NavigationEvents onWillFocus={() => {fetchTracks}} />
            <Text style={{fontSize: 48}}>Track List Screen</Text>
            <Button 
                title="Go to Track Detail"
                onPress={() => props.navigation.navigate('TrackDetail')}
            />
        </>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen