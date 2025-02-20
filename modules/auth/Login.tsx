import { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

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
      router.navigate('/admin')
      console.log('Info saved');
    } catch (e) {
     console.log('Error on save');
    }
  }
  
  return (
    <View className='h-full flex flex-col p-10'>
      <View className='w-[90%]'>
        <Text>Email</Text>
        <TextInput 
          className='p-4 rounded-lg my-5 bg-white'
          placeholder='Email'
          onChangeText={setEmail}
        />
      </View>
      <View className='w-[90%]'>
        <Text>Password</Text>
        <TextInput
          className='p-4 rounded-lg my-5 bg-white'
          placeholder='Password'
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Pressable onPress={onSendInfo}>
        <Text className='p-5 rounded-lg bg-red-500'>Save</Text>
      </Pressable>
    </View>
  )
}

export default LoginModule