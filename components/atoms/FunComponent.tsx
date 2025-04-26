import { useState } from 'react'
import { View, Text, Button } from 'react-native'

const FunComponent = () => {

  const [count, setCount] = useState(0)

  return (
    <View>
      <Text>Count: { count }</Text>
      <Button title='Agregar' onPress={() => setCount(count + 1)} />
    </View>
  )
}

export default FunComponent