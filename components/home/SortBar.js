import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colours } from '../Colours'

const SortBar = () => {
    return (
        <View style={styles.sortNavBar}>
            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name='sort' size={24} color={Colours.textColor} />
                <Text style={styles.text}>Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <AntDesign name='filter' size={24} color={Colours.textColor} />
                <Text style={styles.text}>Filter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    sortNavBar:{
        width:'100%',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:"flex-end"
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        margin:5
    },
    text:{
        color:Colours.textColor,
        marginLeft:3
    }
})

export default SortBar