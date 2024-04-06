import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'


export default function WellcomeScreen() {

  const ring1padding = useSharedValue(0)
  const ring2padding = useSharedValue(0)

  const navigaton = useNavigation()


  useEffect(() => {
    ring1padding.value = 0
    ring2padding.value = 0
    setTimeout(() => ring1padding.value = withSpring(ring1padding.value + hp(5)), 100)
    setTimeout(() => ring2padding.value = withSpring(ring2padding.value + hp(5.5)), 300)

    setTimeout(() => navigaton.navigate('Home'), 2500)
  }, [])
  return (

    <View className="flex-1 items-center justify-center space-y-10 bg-slate-950  ">
      <StatusBar style='light' />
      <Animated.View className="rounded-full bg-white/20" style={{ padding: ring2padding }}>
        <Animated.View className="rounded-full bg-white/20" style={{ padding: ring1padding }}>
          <Image className="rounded-full" source={require('../assets/image/cup-coffee.png')} style={{ width: hp(10), height: hp(10) }} />
        </Animated.View>
      </Animated.View >

      {/* title  */}

      <View className="flex items-center space-y-2">
        <Text className="tracking-widest font-bold text-orange-300 " style={{ fontSize: hp(4) }}>
          GOLDEN COFFEE
        </Text>
        <Text className="tracking-widest font-bold text-orange-100" style={{ fontSize: hp(2) }}>
          wellcome to coffee aplication
        </Text>
      </View>
    </View>
  )
}