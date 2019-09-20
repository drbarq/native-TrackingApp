
import { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'

export default () => {
    // const { createTrack }  = useContext(TrackContext)
    // there is an error when trying to export this function, says it is undefined
    const { state: {locations, name}} = useContext(LocationContext)

    // console.log(useContext(TrackContext))

    const saveTrack = () => {
        // createTrack(name, locations)
        console.log("hello")
    }

    return [saveTrack]
}