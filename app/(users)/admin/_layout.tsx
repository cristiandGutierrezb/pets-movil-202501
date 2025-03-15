import { useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { validateInfoUser } from '../../../lib/api_users'

const AdminLayout = () => {

  const getInfoUser = async () => {
    const infoUser = await AsyncStorage.getItem('@infologin')
    const infoUserObj = JSON.parse(infoUser || '{}')

    validateInfoUser(btoa(infoUserObj.email))
    .then((data) => {
      console.log('data layout', data);
    })
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