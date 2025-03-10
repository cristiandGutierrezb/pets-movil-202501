import { View, Text, Image } from 'react-native'

import { standardContainer } from '../Tokens'

const SmallCard = () => {
  return (
    <View className={`${standardContainer} flex justify-center items-center mb-5`}>
      <Text className='text-white font-semibold text-2xl'>Title</Text>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/7725961/pexels-photo-7725961.jpeg?auto=compress&cs=tinysrgb&w=200' }} 
        width={150}
        height={150}
        className='rounded-lg'
      />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse sed urna in justo euismod condimentum. 
        Nullam nec lacinia nunc. 
        Nullam nec lacinia nunc. 
        Nullam nec lacinia nunc.
      </Text>
    </View>
  )
}

export default SmallCard