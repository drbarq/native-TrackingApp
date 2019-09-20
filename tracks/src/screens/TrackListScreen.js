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
            <Text style={{fontSize: 48}}>Track List Screen</Text>
            <FlatList 
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <ListItem chevron title={item.name}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen


// <Button 
// title="Go to Track Detail"
// onPress={() => props.navigation.navigate('TrackDetail')}
// />