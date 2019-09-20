import React, {useContext} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Context as TrackContext} from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = (props) => {
    const _id = props.navigation.getParam('_id')
    const { state } = useContext(TrackContext)

    const track = state.find(t => t._id === _id)
    const initalCoords = track.locations[0].coords

    return (
        <>
            <Text style={{fontSize: 48}}>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initalCoords
                }}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 500
    }
})

export default TrackDetailScreen