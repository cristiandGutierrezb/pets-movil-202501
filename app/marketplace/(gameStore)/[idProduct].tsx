import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'

const ProductId = () => {

  const { idProduct } = useLocalSearchParams()

  useEffect(() => {
    console.log('');

    const bodyToSend = {
      "idProduct": idProduct
    }

    type inter = { name: string, phone: number }

    fetch('', {
      method: "POST",
      body: JSON.stringify(bodyToSend) 
    })
    .then(() => {
      console.log();
    })
  }, [])
  
  return (
    <View>
      <Text>ProductId</Text>
    </View>
  )
}

export default ProductId