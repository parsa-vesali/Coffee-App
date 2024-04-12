import { View, Text } from 'react-native'
import React from 'react'

const ProductScreen = (props) => {
    const item = props.route.params

    return (
        <View className='flex-1 relative bg-slate-950 '>
            <Text>ProductScreen</Text>
        </View>
    )
}

export default ProductScreen