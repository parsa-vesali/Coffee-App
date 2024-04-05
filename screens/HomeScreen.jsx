import React from 'react'
import { View, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon } from 'react-native-heroicons/outline'
export default function HomeScreen() {
    return (
        <View className="flex-1 relative  bg-zinc-900 ">
            <StatusBar style='light' />
            <SafeAreaView className="flex-1">


                {/* avatar and bell icon */}

                <View className="px-4 pt-4 flex-row justify-between items-center">
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


            </SafeAreaView>
        </View>
    )
}