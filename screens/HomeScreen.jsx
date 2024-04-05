import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
export default function HomeScreen() {
    return (
        <View className="flex-1 relative  bg-zinc-900 ">
            <StatusBar style='light' />
            <SafeAreaView className="flex-1">


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

                <View className="mt-8 px-4 w-80">
                    <Text className="text-orange-300 text-4xl font-bold tracking-widest ">
                        <Text className="text-white">Finde the best</Text> Coffee for you
                    </Text>
                </View>

                {/* search bar */}
                <View className="mx-4 mt-8">
                    <View className="flex-row justify-center items-center rounded-full p-1 bg-gray-300">
                        <TextInput placeholder='search...' className="p-4 flex-1 font-semibold text-xl" />
                        <TouchableOpacity className="p-4 rounded-full bg-orange-300">
                            <MagnifyingGlassIcon size='25' strokeWidth={4} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}