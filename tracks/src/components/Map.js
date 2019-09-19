import React, { useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'


const Map = () => {
    const { state: { currentLocation }} = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
       height: 350 
    }
})

export default Map




// let points = []
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         points.push({
//             latitude: 39.769148 + i * 0.001,
//             longitude: -104.974713 + i * 0.001
//         })
//     } else {
//         points.push({
//             latitude: 39.769148 - i * 0.002,
//             longitude: -104.974713 - i * 0.001
//         })
//     }
// }