import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Colours } from '../Colours'

const DetailsCard = ({ data }) => {
    const [price, setPrice] = useState(data.variants[0].sellingPrice)
    const [count, setCount] = useState(1)
    const variants = data ? data.variants : []

    const incCount=()=>{
        if(count>=10){
            setCount(10)
        }else{
            setCount(count+1)
        }
    }
    const decCount=()=>{
        if(count<=1){
            setCount(1)
        }else{
            setCount(count-1)
        }
    }
    return (
        <View style={styles.detailsCard}>
            <Image
                style={styles.img}
                source={{ uri: data.mediaUrl }}
                resizeMode='stretch'
            />
            {variants.length > 1 ? <ScrollView style={styles.varientDiv} horizontal>
                {variants.map((elem) => (
                    <TouchableOpacity 
                    style={[styles.card,{
                        borderColor:price==elem.sellingPrice?Colours.secondary:Colours.light
                    }]} key={elem.variant}
                    onPress={()=>{
                        setPrice(elem.sellingPrice)
                    }}
                    >
                        <Text style={styles.name}>{elem.variant}</Text>
                        <Text style={styles.mrp}>₹ {elem.mrp}</Text>
                        <Text style={styles.name}>₹ {elem.sellingPrice}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView> : null}
            <View style={{
                padding: 10
            }}>
                <Text style={styles.smallText}>{data.category[0].name}</Text>
                <Text style={styles.text}>{data.name}</Text>
                <View style={styles.priceDiv}>
                    <Text style={styles.text}>₹ {price}</Text>
                    <View style={styles.starDiv}>
                        <Text style={{
                            fontSize: 18,
                            marginRight: 2,
                            color: Colours.secondary
                        }}>{data.rating}</Text>
                        <AntDesign name='staro' size={18} color={Colours.secondary} />
                    </View>
                </View>
                <View style={styles.bagBtnDiv}>
                    <View style={styles.countBtnDiv}>
                        <TouchableOpacity style={styles.btn} onPress={()=>{
                            incCount()
                        }}>
                            <Text style={{
                                fontSize:20,
                                color:Colours.secondary
                            }}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.countText}>{count}</Text>
                        <TouchableOpacity style={styles.btn} onPress={()=>{
                            decCount()
                        }}>
                            <Text style={{
                                fontSize:28,
                                color:Colours.secondary
                            }}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addBag}>
                        <Feather name='shopping-bag' size={20} color={Colours.primary} />
                        <Text style={{
                            fontSize:16,
                            color:Colours.primary,
                            marginLeft:3
                        }}>Add to bag</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsCard: {
        width: '100%',
        padding: 10,
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    smallText: {
        color: Colours.textColor,
        marginTop: 5,
        fontSize: 13,
    },
    text: {
        color: Colours.secondary,
        marginVertical: 2,
        fontSize: 18
    },
    priceDiv: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    starDiv: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 5,
        backgroundColor: Colours.light,
        borderRadius: 5
    },
    varientDiv: {
        width: '100%',
        paddingVertical:10
    },
    card: {
        padding: 10,
        backgroundColor: Colours.light,
        borderRadius: 10,
        margin: 3,
        borderWidth:2
    },
    name: {
        fontSize: 16,
        color: Colours.secondary
    },
    mrp: {
        color: Colours.textColor,
        textDecorationLine: 'line-through',
    },
    bagBtnDiv:{
        flexDirection:'row',
        marginTop:5
    },
    countBtnDiv:{
        flexDirection:'row'
    },
    btn:{
        width:40,
        height:40,
        backgroundColor:Colours.light,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:5
    },
    countText:{
        width:30,
        height:40,
        textAlign:"center",
        textAlignVertical:'center',
        fontSize:20,
        color:Colours.secondary
    },
    addBag:{
        height:40,
        paddingHorizontal:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colours.secondary,
        borderRadius:5,
        marginLeft:10,
    }
})
export default DetailsCard