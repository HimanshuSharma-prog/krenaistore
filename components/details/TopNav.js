import { StyleSheet, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colours } from '../Colours'
import { useNavigation } from '@react-navigation/native'

const TopNav = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.topNav}>
            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.goBack()
            }}>
                <AntDesign name='arrowleft' size={24} color={Colours.secondary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <AntDesign name='hearto' size={24} color={Colours.secondary} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    topNav: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        borderBottomWidth: .2,
        borderBottomColor: Colours.textColor,
        paddingHorizontal: 10
    },
    btn:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5
    }
})

export default TopNav