import { View, Text, TouchableOpacity, ImageBackground, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, BellIcon, UserIcon, ChevronRightIcon, ShieldCheckIcon, PaintBrushIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { setting, general } from '../constants/index'
const ProfileScreen = () => {
    const navigation = useNavigation()

    return (
        <ScrollView className=' px-4 flex-1 relative bg-slate-950 '>
            <StatusBar style='light' />

            {/* BACK ICON AND NOTIFICATION ICON */}
            <View className=" mt-10 flex-row justify-between items-center">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="bg-orange-400 p-1 rounded-md mt-2 items-center justify-center">
                    <ChevronLeftIcon color='white' size={28} strokeWidth={3} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <BellIcon size='30' color='white' />
                </TouchableOpacity>
            </View>

            {/* PROFILE IMG */}
            <View className="mt-20 items-center">
                <Image
                    source={require('../assets/image/avatar.jpg')}
                    className="h-40 w-40 rounded-full"
                />
                <Text className='text-white mt-4 text-2xl font-bold'>
                    parsa vesali
                </Text>
                <Text className='text-gray-300 mt-1 text-lg font-semibold'>
                    parsavesali84@gmail.com
                </Text>
            </View>

            {/* COFFEE CLUB */}
            <View className="mt-10">
                <View className="flex-row items-center gap-x-2">
                    <Image className="w-10 h-10" source={require('../assets/image/high-score.png')} />
                    <View>
                        <Text className="text-orange-400 text-2xl font-bold">Coffee Club</Text>
                        <Text className="text-lg text-white">You can get points with coffee</Text>
                    </View>
                </View>
                <View className="mt-6 flex-row justify-between items-center flex-wrap">
                    <View style={{ width: hp(21) }} className=" h-20 bg-cyan-600 mb-4 rounded-lg flex-row justify-center items-center">
                        <Image className='w-10 h-10' source={require('../assets/image/add.png')} />
                        <Text className="text-white text-lg font-bold">Invite 2people</Text>
                    </View>
                    <View style={{ width: hp(21) }} className=" h-20 bg-cyan-600 mb-4 rounded-lg flex-row justify-center items-center">
                        <Image className='w-10 h-10' source={require('../assets/image/coffee-cup (1).png')} />
                        <Text className="text-white text-lg font-bold">First order</Text>
                    </View>
                    <View style={{ width: hp(21) }} className=" h-20 bg-cyan-600 mb-4 rounded-lg flex-row justify-center items-center">
                        <Image className='w-10 h-10' source={require('../assets/image/verified.png')} />
                        <Text className="text-white text-lg font-bold">Complete </Text>
                    </View>
                    <View style={{ width: hp(21) }} className=" h-20 bg-cyan-600 mb-4 rounded-lg flex-row justify-center items-center">
                        <Image className='w-10 h-10' source={require('../assets/image/coffee-cup.png')} />
                        <Text className="text-white text-lg font-bold">buy coffee</Text>
                    </View>
                </View>
            </View>

            {/* Settigs */}

            <View className="mt-4">
                <Text className="text-white text-2xl">Setting :</Text>
                <View className="mt-4">

                    {
                        setting.map(item => (
                            <TouchableOpacity key={item.id} className="justify-between flex-row-reverse items-center mb-5">
                                <View>
                                    <ChevronRightIcon color='#d1d5db' size={25} />
                                </View>
                                <View className=" flex-row items-center">
                                    <View className="bg-sky-600 rounded-full w-12 h-12 items-center justify-center mr-3">
                                        {item.icon}
                                    </View>
                                    <View>
                                        <Text className="text-white text-lg ">{item.title}</Text>
                                        <Text className="text-gray-300 text-sm">{item.subtitle}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        ))
                    }


                </View>
            </View>
            <View className="mt-4">
                <Text className="text-white text-2xl">General :</Text>
                <View className="mt-4">

                    {
                        general.map(item => (
                            <TouchableOpacity key={item.id} className="justify-between flex-row-reverse items-center mb-5">
                                <View>
                                    <ChevronRightIcon color='#d1d5db' size={25} />
                                </View>
                                <View className=" flex-row items-center">
                                    <View className="bg-sky-600 rounded-full w-12 h-12 items-center justify-center mr-3">
                                        {item.icon}
                                    </View>
                                    <View>
                                        <Text className="text-white text-lg ">{item.title}</Text>
                                        <Text className="text-gray-300 text-sm">{item.subtitle}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        ))
                    }


                </View>
            </View>

        </ScrollView>

    )
}

export default ProfileScreen