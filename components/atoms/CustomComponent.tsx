import { View, Text } from 'react-native'
import React from 'react'

interface CustomComponentProps {
  name: string
} 

const CustomComponent = ({ name }: CustomComponentProps) => {
  return <Text>Hi, { name }</Text>
}

export default CustomComponent