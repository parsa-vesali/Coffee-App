import React from 'react'
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, HeartIcon, } from "react-native-heroicons/outline";
import { StarIcon, HandThumbUpIcon, MapPinIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { BlurView } from 'expo-blur';



const ProductScreen = (props) => {
    const navigation = useNavigation()
    const item = props.route.params
    return (
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
                            <View className="w-[35%]">
                                <View className="flex-row justify-between">
                                    <View className="p-2 bg-black rounded-lg w-15 h-15 justify-center items-center">
                                        <HandThumbUpIcon color='#fb923c' />
                                        <Text className="text-white text-sm ">Coffee</Text>
                                    </View>
                                    <View className="p-2 bg-black rounded-lg w-15 h-15 justify-center items-center">
                                        <MapPinIcon color='#fb923c' />
                                        <Text className="text-white text-sm "> Coffee</Text>
                                    </View>
                                </View>
                                <View className="bg-black p-1">
                                    <Text className="text-white">Medium roasted</Text>
                                </View>
                            </View>
                        </BlurView>
                    </View>


                </ImageBackground>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ProductScreen