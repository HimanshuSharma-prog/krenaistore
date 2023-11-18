import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopNav from '../components/details/TopNav'
import DetailsCard from '../components/details/DetailsCard'
import ProductCard from '../components/home/ProductCard'
import { Colours } from '../components/Colours'
import Loader from '../components/Loader'

const DetailsScreen = ({ route }) => {
    console.log('route ;', route)
    const {id,random} = route.params
    const [productData, setProductData] = useState()
    const [similarData, setSimilarData] = useState([])
    const [loader,setLoader]=useState(false)

    // const apiUrl = 'https://storeapi.wekreta.in/api/v4/product/customer?id=19234&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100'

    const getProductData = async () => {
        try {
            setLoader(true)
            const res = await fetch(`https://storeapi.wekreta.in/api/v4/product/customer?id=${id}&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100`)
            if (res.status == 200) {
                const result = await res.json()
                setProductData(result.object[0])
                console.log(result.object[0])
                getSimilarProduct(result.object[0].category[0].name)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const getSimilarProduct = async (cat) => {
        try {
            const res = await fetch(`https://storeapi.wekreta.in/api/v4/product/customer?secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100&categoryName=${cat}&currentPage=1&itemsPerPage=10`)
            if (res.status == 200) {
                const result = await res.json()
                setSimilarData(result.object)
                setLoader(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProductData()
    }, [id])
    return (
        <View style={{ flex: 1 }}>
            <TopNav />
            {loader?<Loader/>:
            <ScrollView style={{
                width:'100%'
            }}>
                {productData ? <DetailsCard data={productData} /> : null}
                <View style={{
                    width: '100%',
                    borderTopWidth: .2,
                    borderBottomWidth: .2,
                    borderColor: Colours.textColor,
                    padding: 10
                }}>
                    <Text style={{
                        fontSize: 16
                    }}>Similar Products</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    flexWrap: 'wrap',
                    paddingTop:10
                }}>
                    {similarData?.map((item) => (
                        <ProductCard
                            key={item.name}
                            id={item.id}
                            image={item.mediaUrl}
                            cat={item.category[0].name}
                            name={item.name}
                            price={item.variants[0].sellingPrice}
                        />
                    ))}
                </View>
            </ScrollView>}
        </View>
    )
}


export default DetailsScreen