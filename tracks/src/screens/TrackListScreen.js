import React, {useContext} from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'


const TrackListScreen = props => {
    const { state, fetchTracks } = useContext(TrackContext)

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList 
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => props.navigation.navigate('TrackDetail', {_id: item._id })}
                        >
                            <ListItem chevron title={item.name}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

// header text label
TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({})

export default TrackListScreen


// <Button 
// title="Go to Track Detail"
// onPress={() => props.navigation.navigate('TrackDetail')}
// />