import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/home/NavBar'
import SortBar from '../components/home/SortBar'
import ProductCard from '../components/home/ProductCard'
import Loader from '../components/Loader'

const HomeScreen = () => {

    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const res = await fetch(`https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=${page}&itemsPerPage=10&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100`)
            if (res.status == 200) {
                const result = await res.json()
                setData([...data, ...result.object])
            }
            // console.log('data :', data)
        } catch (err) {
            console.log(err)
        }
    }

    const loadMoreData = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        getData()
    }, [page])
    return (
        <View style={{ flex: 1 }}>
            <NavBar />
            <SortBar />
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ProductCard
                        key={item.name}
                        image={item.mediaUrl}
                        cat={item.category[0].name}
                        name={item.name}
                        price={item.variants[0].sellingPrice}
                    />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0}
                ListFooterComponent={Loader}
                style={{
                    paddingTop:10,
                }}
            />
        </View>
    )
}

export default HomeScreen