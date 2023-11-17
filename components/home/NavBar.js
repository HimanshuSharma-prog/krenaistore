import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Colours } from '../Colours'

const NavBar = () => {
    return (
        <View style={styles.navBar}>
            <View style={styles.titleDiv}>
                <TouchableOpacity style={styles.btn}>
                    <AntDesign name='arrowleft' size={24} color={Colours.secondary} />
                </TouchableOpacity>
                <Text style={styles.title}>kitchen items</Text>
            </View>
            <View style={styles.btnDiv}>
                <TouchableOpacity style={styles.btn}>
                    <AntDesign name='search1' size={24} color={Colours.secondary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <AntDesign name='hearto' size={24} color={Colours.secondary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Feather name='shopping-bag' size={24} color={Colours.secondary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        borderBottomWidth:.2,
        borderBottomColor:Colours.textColor,
        paddingHorizontal:10
    },
    titleDiv:{
        flexDirection:'row',
        alignItems:'center'
    },
    btn:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5
    },
    title:{
        fontSize:16,
        color:Colours.secondary,
    },
    btnDiv:{
        flexDirection:'row'
    }
})


export default NavBar