import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text className='text-4xl text-red-600'>Index</Text>
      <Link href='/profile'>
        <Text className='rounded p-4 bg-slate-200 text-5xl'>
          Profile
        </Text>
      </Link>
    </View>
  )
}

export default Index