import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colours } from '../Colours'

const ProductCard = ({image,cat,name,price}) => {
  return (
    <View style={styles.productCard}>
      <View style={styles.imgDiv}>
        <Image
          style={styles.img}
          source={{ uri: image}}
          resizeMode='stretch'
        />
        <TouchableOpacity style={styles.btn}>
          <AntDesign name='hearto' size={20} color={Colours.secondary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.smallText}>{cat}</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>₹ {price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  productCard: {
    width:'50%',
    padding:5,
  },
  imgDiv:{
    width:'100%',
    position:'relative'
  },
  img:{
    width:'100%',
    height:150,
    borderRadius:10
  },
  btn:{
    position:"absolute",
    top:10,
    right:10,
  },
  smallText:{
    color:Colours.textColor,
    marginTop:5,
    fontSize:13,
  },
  text:{
    color:Colours.secondary,
    marginVertical:2,
  }
})

export default ProductCard