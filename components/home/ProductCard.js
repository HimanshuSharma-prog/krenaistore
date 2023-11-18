import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colours } from '../Colours'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ image, cat, name, price,id }) => {
  const navigation=useNavigation()
  const random=Math.round(Math.random()*10+1)
  console.log('random :',random)
  return (
    <View style={styles.productCard}>
      <View style={styles.imgDiv}>
        <Image
          style={styles.img}
          source={{ uri: image }}
          resizeMode='stretch'
        />
        <TouchableOpacity style={styles.btn}>
          <AntDesign name='hearto' size={20} color={Colours.secondary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.smallText} onPress={() => {
          navigation.navigate('Details',{id,random})
        }}>{cat}</Text>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('Details',{id,random})
        }}
      >{name}</Text>
      <Text style={styles.text} onPress={() => {
          navigation.navigate('Details',{id,random})
        }}>₹ {price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  productCard: {
    width: '50%',
    padding: 5,
  },
  imgDiv: {
    width: '100%',
    position: 'relative'
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },
  btn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  smallText: {
    color: Colours.textColor,
    marginTop: 5,
    fontSize: 13,
  },
  text: {
    color: Colours.secondary,
    marginVertical: 2,
  }
})

export default ProductCard