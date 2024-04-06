import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon, MagnifyingGlassIcon, StarIcon } from 'react-native-heroicons/outline'
import { categories, coffeeItems } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BlurView } from 'expo-blur';
export default function HomeScreen() {

    const [activeCategory, setActiveCategory] = useState(1)

    return (
        <View className="flex-1 relative bg-slate-950 ">
            <StatusBar style='light' />
            <ScrollView className="flex-1 mt-5">


                {/* avatar and bell icon */}

                <View className="px-4 mt-4 flex-row justify-between items-center">
                    <Image
                        source={require('../assets/image/avatar.jpg')}
                        className="h-10 w-10 rounded-full"
                    />
                    <View className="flex-row items-center space-x-1 ">
                        <MapPinIcon size='25' color='#FDBA74' />
                        <Text className="text-xl font-semibold text-white">Iran , Tehran</Text>
                    </View>
                    <BellIcon size='30' color='white' />
                </View>

                {/* text head */}
                <View className="mt-8 px-4 w-80">
                    <Text className="text-orange-300 text-4xl font-bold tracking-widest ">
                        <Text className="text-white">Find the best</Text> Coffee for you
                    </Text>
                </View>

                {/* search bar */}
                <View className="mx-4 mt-8">
                    <View className="flex-row justify-center items-center rounded-full p-1 bg-white">
                        <TextInput placeholder='search...' className="p-2 flex-1 font-semibold text-base" />
                        <TouchableOpacity className="p-3 rounded-full bg-orange-300">
                            <MagnifyingGlassIcon size='25' strokeWidth={2} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* CATEGORY */}

                <View className="px-4 mt-6">
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id}
                        className="overflow-visible"
                        renderItem={({ item }) => {
                            let isActive = item.id == activeCategory
                            let activeTextClass = isActive ? 'text-white' : 'text-gray-700'
                            return (
                                <TouchableOpacity
                                    style={{ backgroundColor: isActive ? '#10B981' : '#D1D5DB' }}
                                    onPress={() => setActiveCategory(item.id)}
                                    className="p-4 px-4 rounded-full mr-2 shadow">

                                    <Text className={"font-semibol " + activeTextClass}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                {/* COFFE'E PRODUCT */}
                <View className="mt-8 px-4 flex-row flex-wrap justify-between ">
                    {
                        coffeeItems.map(item => (
                            <View key={item.id} className="mb-5 rounded-xl overflow-hidden">
                                <BlurView style={{ padding: hp(1) }} intensity={95} tint='dark' >
                                    <TouchableOpacity >
                                        <Image source={item.image} className="rounded-xl" style={{ height: hp(19), width: hp(19) }} />
                                        <View className="absolute ring-0 rounded-xl overflow-hidden">
                                            <BlurView className="flex-row" style={{ padding: hp(.5) }} tint='dark' intensity={70}>
                                                <StarIcon size={25} color='#FDBA74' />
                                                <Text className="text-white mx-2">{item.rating}</Text>
                                            </BlurView>
                                        </View>
                                    </TouchableOpacity>
                                    <Text
                                        className="text-white font-semibold my-2"
                                        style={{ fontSize: hp(2.2) }}
                                        numberOfLines={2}
                                    >
                                        {item.name}
                                    </Text>
                                    <Text
                                        className="text-gray-400"
                                        style={{ fontSize: hp(1.6) }}
                                        numberOfLines={1}
                                    >
                                        {item.des}
                                    </Text>
                                </BlurView>
                            </View>
                        ))
                    }

                </View>
            </ScrollView >
        </View >
    )
}