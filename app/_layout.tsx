import { useEffect, useState } from "react";
import { Stack, Slot } from "expo-router";
import NetInfo from '@react-native-community/netinfo'

import "../global.css";

const HomeLayout = () => {

  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected as boolean)
    })

    return () => {
      unsubscribe();
    }

  }, [])

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="marketplace" />
      <Stack.Screen name="recomendations" />
    </Stack>
  )
}

export default HomeLayout