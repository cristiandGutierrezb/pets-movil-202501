import { View, Text, Image } from 'react-native'

import { standardContainer } from '../Tokens'

import { ProductDAO } from '../../interfaces/Marketplace'

interface SmallCardProps {
  product: ProductDAO
}

const SmallCard = ({ product }: SmallCardProps) => {
  return (
    <View className={`${standardContainer} flex justify-center items-center mb-5`}>
      <Text className='text-white font-semibold text-2xl'>{ product.title }</Text>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/7725961/pexels-photo-7725961.jpeg?auto=compress&cs=tinysrgb&w=200' }} 
        width={150}
        height={150}
        className='rounded-lg'
      />
      <Text>
        { product.description }
      </Text>
    </View>
  )
}

export default SmallCard