import { View, Text, Pressable } from 'react-native'

interface CustomButtonProps {
  color: ''
  text: string
  actionFunction: () => void
} 

const CustomButton = ({ color, text, actionFunction }: CustomButtonProps) => {
  return (
    <Pressable className=''>
      <Text>CustomButton</Text>
    </Pressable>
  )
}

export default CustomButton