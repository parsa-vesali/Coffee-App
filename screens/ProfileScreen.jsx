import { View, Text, TouchableOpacity, ImageBackground, StatusBar, Image } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, BellIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";


const ProfileScreen = () => {
    const navigation = useNavigation()

    return (
        <View className='flex-1 relative bg-slate-950 '>
            <StatusBar style='light' />

            {/* BACK ICON AND NOTIFICATION ICON */}
            <View className="px-4 mt-10 flex-row justify-between items-center">
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
        </View>

    )
}

export default ProfileScreen