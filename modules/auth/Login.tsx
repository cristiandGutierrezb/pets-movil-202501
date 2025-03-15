import { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginModule = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSendInfo = async () => {
    try {
      const infoLogin = {
        email,
        password
      }
      await AsyncStorage.setItem('@infologin', JSON.stringify(infoLogin))
      router.replace('/admin')
    } catch (e) {
     console.log('Error on save');
    }
  }
  
  return (
    <SafeAreaView className='h-full flex justify-center items-center bg-primary'>
      <StatusBar style='light' />
      <View className='w-[90%]'>
        <View>
          <Text className='text-secondary font-semibold text-2xl'>Email</Text>
          <TextInput 
            className='p-4 rounded-lg my-5 bg-white'
            placeholder='Email'
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text className='text-secondary font-semibold text-2xl'>Password</Text>
          <TextInput
            className='p-4 rounded-lg my-5 bg-white'
            placeholder='Password'
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <Pressable onPress={onSendInfo}>
          <Text className='p-5 rounded-lg bg-secondary font-bold text-primary text-2xl text-center'>Save</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default LoginModule