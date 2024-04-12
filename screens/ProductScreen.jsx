import React, { useState } from 'react'
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, HeartIcon, } from "react-native-heroicons/outline";
import { StarIcon, HandThumbUpIcon, MapPinIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { BlurView } from 'expo-blur';



const ProductScreen = (props) => {
    const navigation = useNavigation()
    const sizes = [
        'S', 'M', 'L'
    ]
    const item = props.route.params
    const [activeSize, setActiveSize] = useState('S')


    return (
        <>
            <ScrollView className='flex-1 relative bg-slate-950 '>
                <SafeAreaView>
                    <ImageBackground
                        className=" justify-between"
                        source={item.image}
                        style={{ height: hp(50) }}
                        imageStyle={{
                            borderRadius: hp(4)
                        }}
                    >
                        <View className="flex-row justify-between items-center p-4">
                            <TouchableOpacity onPress={() => navigation.goBack()}
                                className="bg-orange-400 p-1 rounded-lg ">
                                <ChevronLeftIcon size={25} color='#fff' strokeWidth='3' />
                            </TouchableOpacity>
                            <TouchableOpacity className="">
                                <HeartIcon size={30} color='#fff' strokeWidth='2' />
                            </TouchableOpacity>
                        </View>


                        <View className="overflow-hidden" style={{ borderRadius: hp(4) }}>
                            <BlurView intensity={90} className='p-4 flex-row justify-between' tint='dark'>
                                <View>
                                    <Text className="text-3xl font-bold mb-1 text-white">
                                        {item.name}
                                    </Text>
                                    <Text className="text-xl font-semibold text-gray-300">
                                        {item.des}
                                    </Text>
                                    <View className="flex-row items-center mt-2">
                                        <StarIcon color='#fb923c' size={20} />
                                        <Text className="text-white text-base ml-1 font-semibold">{item.rating}</Text>
                                    </View>
                                </View>
                                <View className="w-[35%] justify-between">
                                    <View className="flex-row justify-between">
                                        <View className="p-2 bg-black/70 rounded-lg w-15 h-15 justify-center items-center">
                                            <HandThumbUpIcon color='#fb923c' />
                                            <Text className="text-white text-sm ">Coffee</Text>
                                        </View>
                                        <View className="p-2 bg-black/70 rounded-lg w-15 h-15 justify-center items-center">
                                            <MapPinIcon color='#fb923c' />
                                            <Text className="text-white text-sm "> Coffee</Text>
                                        </View>
                                    </View>
                                    <View className="bg-black/70 p-1 rounded-l items-center justify-center">
                                        <Text className="text-white text-sm">Medium roasted</Text>
                                    </View>
                                </View>
                            </BlurView>
                        </View>


                    </ImageBackground>


                    <View className="px-4">
                        <Text className="text-white text-2xl mb-2 mt-4">
                            Description :
                        </Text>
                        <Text numberOfLines={5} className="text-white tracking-widest ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus odio beatae alias architecto laudantium veniam eum iusto laboriosam quas ut nihil nesciunt ratione qui, impedit necessitatibus esse vitae tenetur?
                        </Text>

                        <View>
                            <Text className="text-white text-2xl mb-2 mt-4">
                                Size :
                            </Text>
                            <View className="flex-row justify-between mt-4">
                                {
                                    sizes.map((size, index) => (
                                        <TouchableOpacity
                                            onPress={() => setActiveSize(size)}
                                            key={index}
                                            className="border  px-12 py-1 rounded-lg bg-white/10"
                                            style={[{
                                                backgroundColor: "#111",
                                            },
                                            activeSize == size && {
                                                borderColor: "#f97316"
                                            }
                                            ]}
                                        >
                                            <Text className="text-white text-lg">{size}</Text>
                                        </TouchableOpacity>
                                    ))
                                }

                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
            <SafeAreaView className="bg-slate-950 p-3 flex-row justify-between items-center">
                <View>
                    <Text className="text-white text-2xl">Price :</Text>
                    <View className="flex-row">
                        <Text className="text-orange-500 text-xl">$</Text>
                        <Text className="text-white ml-1 text-xl">{item.price}</Text>
                    </View>
                </View>
                <TouchableOpacity className="bg-orange-500 w-40 p-3 items-center justify-center rounded-lg">
                    <Text className="text-white text-xl font-bold">Buy Now</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default ProductScreen