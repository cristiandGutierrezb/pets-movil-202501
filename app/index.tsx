import { Link } from 'expo-router'
import { View, Text } from 'react-native'

import { bgRed } from '../components/Tokens'

const Index = () => {
  return (
    <View className='h-full flex flex-col items-center justify-center gap-10'>
      <Link href='/login'>
        <Text className='bg-slate-200 text-3xl p-5 rounded-lg'>
          Autentication
        </Text>
      </Link>
      <Link href='/marketplace'>
        <Text className={`bg-secondary rounded p-4 text-3xl`}>
          Marketplace
        </Text>
      </Link>
      <Link href='/recomendations'>
        <Text className='rounded p-4 bg-slate-200 text-3xl'>
          Recomendations
        </Text>
      </Link>
    </View>
  )
}

export default Index