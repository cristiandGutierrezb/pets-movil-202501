import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import NetInfo from '@react-native-community/netinfo'

import { usePushNotifications } from "../hooks/usePushNotifications";

import "../global.css";

const HomeLayout = () => {

  const { expoPushToken, notification } = usePushNotifications()

  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {

    console.log("expoPushToken", expoPushToken)
    console.log("notification", notification);
    

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