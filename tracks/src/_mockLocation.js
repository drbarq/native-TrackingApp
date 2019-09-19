import * as Location from 'expo-location'
// only for testing 

const tenMetersWithDegrees = 0.0001

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            aaltitudeAccuracy: 5,
            altitude: 5,
            longitude: -104.974713 + increment * tenMetersWithDegrees,
            latitude: 39.769148 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged' , {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)