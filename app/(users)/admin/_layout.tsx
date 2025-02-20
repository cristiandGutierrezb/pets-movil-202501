import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'

const AdminLayout = () => {

  const getInfoUser = async () => {
    try {
      const infoUser = await AsyncStorage.getItem('@infologin')
      console.log('infoUser admin', infoUser);
    } catch (error) {
      console.log('Not working');
    }
  }

  useEffect(() => {
    getInfoUser()
  }, [])

  return (
    <View>
      <Text className='text-3xl text-black font-bold'>AdminLayout</Text>
    </View>
  )
}

export default AdminLayout