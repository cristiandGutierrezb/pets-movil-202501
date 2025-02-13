import { useEffect, useState } from "react";
import { Stack } from "expo-router";
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
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="profile" options={{ headerShown: false }}/>
      <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
      <Stack.Screen name="marketplace" options={{ headerShown: false }}/>
      <Stack.Screen name="recomendations" options={{ headerShown: false }}/>
    </Stack>
  )
}

export default HomeLayout