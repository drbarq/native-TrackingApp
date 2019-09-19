import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext)
    const [err] = useLocation(isFocused, addLocation)


    return (
        <SafeAreaView
            forceInset={{top: 'always'}}
        >
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)